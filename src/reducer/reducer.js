const isArtistAnswerCorrect = (userUnswear, question) =>
  userUnswear.artist === question.song.artist;

const isGenreAnswerCorrect = (userUnswear, question) =>
  userUnswear.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));


const ActionCreator = {
  incrementStep: () => ({
    type: `INCREMENT_STEP`,
    payload: 1
  }),

  incrementMistake: (userUnswear, questions, mistakes, maxMistakes, step) => {

    let answerIsCorrect = false;
    if (step + 1 >= questions.length) {
      return {
        type: `RESET`,
      };
    }

    switch (questions[step].type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userUnswear, questions[step]);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userUnswear, questions[step]);
        break;
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return {
        type: `RESET`,
      };
    }

    return {
      type: `INCREMENT_MISTAKES`,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
};


const initialState = {
  step: -1,
  mistakes: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return Object.assign({}, state, {
      step: state.step + action.payload,
    });
    case `INCREMENT_MISTAKES`: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload,
    });
    case `RESET`: return Object.assign({}, initialState);
  }

  return state;
};

export {
  initialState,
  reducer,
  ActionCreator,
  isGenreAnswerCorrect,
  isArtistAnswerCorrect,

};
