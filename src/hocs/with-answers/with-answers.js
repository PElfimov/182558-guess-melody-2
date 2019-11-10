import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withAnswers = (Component) => {
  class WithAnswers extends PureComponent {
    constructor(props) {
      super(props);
      const answers = this.props.question.answers;
      this.state = {answer: new Array(answers.length).fill(false)};
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
      const {screenIndex, question} = this.props;
      const answers = question.answers;
      if (prevProps.screenIndex !== screenIndex) {
        const answer = new Array(answers.length).fill(false);
        this.setState({answer});
      }
    }


    handleChange(i) {
      const answer = [...this.state.answer];
      answer[i] = !answer[i];
      this.setState({answer});
    }

    render() {
      return <Component
        {...this.props}
        userAnswer={this.state.answer}
        onClick={this.handleChange}
      />;
    }
  }

  WithAnswers.propTypes = {
    question: PropTypes.exact({
      type: PropTypes.oneOf([`genre`, `artist`]),
      genre: PropTypes.string,
      answers: PropTypes.arrayOf(PropTypes.exact({
        src: PropTypes.string,
        genre: PropTypes.string
      })
      )
    }).isRequired,
    screenIndex: PropTypes.number.isRequired,
  };

  return WithAnswers;
};

export default withAnswers;
