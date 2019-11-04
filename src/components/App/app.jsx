import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {ActionCreator} from "../../reducer/reducer";

class App extends PureComponent {
  static getScreen(step, props) {
    const {time, mistakes, maxMistakes} = props;

    if (step === -1) {
      return (
        <WelcomeScreen
          mistakes={mistakes}
          time={time}
          onClick={() => props.onWelcomeScreenClick()}
        />
      );
    }

    const {questions} = props;
    const currentQuestion = questions[step];
    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GenreQuestionScreen
            question={currentQuestion}
            onAnswer={(userAnswer) =>
              props.onUserAnswer(userAnswer, questions, mistakes, maxMistakes, step)
            }
            screenIndex={step}
          />
        );

      case `artist`:
        return (
          <ArtistQuestionScreen
            question={currentQuestion}
            onAnswer={(userAnswer) =>
              props.onUserAnswer(userAnswer, currentQuestion, mistakes, maxMistakes, step)
            }
            screenIndex={step}
          />
        );
    }

    return null;
  }

  constructor(props) {
    super(props);
  }

  render() {
    return App.getScreen(this.props.step, this.props);
  }
}

App.propTypes = {
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    step: state.step,
    mistakes: state.mistakes
  });

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),
  onUserAnswer: (onUserAnswer, questions, mistakes, maxMistakes, step) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(onUserAnswer, questions, mistakes, maxMistakes, step));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
