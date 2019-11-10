import React, {PureComponent} from "react";
import {connect} from "react-redux";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {ActionCreator} from "../../reducer/reducer";
import GameHeader from "../game-header/game-header";
import propTypes from "./prop-types.js";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withAnswers from "../../hocs/with-answers/with-answers";

const GenreQuestionScreenWrapped = withAnswers(withActivePlayer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends PureComponent {
  static getScreen(step, props) {
    const {time, mistakes, maxMistakes} = props;

    if (step === -1) {
      return (
        <WelcomeScreen
          mistakes={maxMistakes}
          time={time / 1000 / 60}
          onClick={() => props.onWelcomeScreenClick()}
        />
      );
    }

    const {questions} = props;
    const currentQuestion = questions[step];
    switch (currentQuestion.type) {
      case `genre`:
        return (
          <GenreQuestionScreenWrapped
            question={currentQuestion}
            onAnswer={(userAnswer) =>
              props.onUserAnswer(userAnswer, questions, mistakes, maxMistakes, step)
            }
            screenIndex={step}
          />
        );

      case `artist`:
        return (
          <ArtistQuestionScreenWrapped
            question={currentQuestion}
            onAnswer={(userAnswer) =>
              props.onUserAnswer(userAnswer, questions, mistakes, maxMistakes, step)
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
    const {step, mistakes, time, registrateTimer, onTimeUpdate, onTimeEnd} = this.props;
    return (
      <section className="game">
        {step > -1 && (
          <GameHeader
            mistakes={mistakes}
            gameTime={time}
            registrateTimer={registrateTimer}
            onTimeUpdate={onTimeUpdate}
            onTimeEnd={onTimeEnd}
          />
        )}
        {App.getScreen(this.props.step, this.props)}
      </section>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    step: state.step,
    mistakes: state.mistakes,
    time: state.time
  });

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),
  onUserAnswer: (onUserAnswer, questions, mistakes, maxMistakes, step) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(onUserAnswer, questions, mistakes, maxMistakes, step));
  },

  onTimeUpdate: () => dispatch(ActionCreator.decrementTime()),

  onTimeEnd: () => dispatch(ActionCreator.resetGame()),

  registrateTimer: (id) => dispatch(ActionCreator.registrateTimer(id))
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
