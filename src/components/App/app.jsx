import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";

export default class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    const {time, mistakes} = props;

    if (question === -1) {
      return <WelcomeScreen mistakes={mistakes} time={time} onClick={onUserAnswer} />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GenreQuestionScreen
            question={currentQuestion}
            onAnswer={onUserAnswer}
            screenIndex={question}
          />
        );

      case `artist`:
        return (
          <ArtistQuestionScreen
            question={currentQuestion}
            onAnswer={onUserAnswer}
            screenIndex={question}
          />
        );
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      question: -1
    };
  }

  render() {
    const questions = this.props.questions;
    return App.getScreen(this.state.question, this.props, () => {
      this.setState((state) => {
        const nextIndex = state.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1
        };
      });
    });
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};
