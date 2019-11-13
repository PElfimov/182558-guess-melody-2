import api from "../api";

const GAME_TIME_MINUTES = 5;

const initialState = {
  step: -1,
  mistakes: 0,
  questions: [],
  time: GAME_TIME_MINUTES * 60 * 1000,
  gameTimer: null

};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET: `RESET`,
  DECREMENT_TIME: `DECREMENT_TIME`,
  REGISTRATE_TIMER: `REGISTRATE_TIMER`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`
};


const isArtistAnswerCorrect = (userUnswear, question) =>
  userUnswear.artist === question.song.artist;

const isGenreAnswerCorrect = (userUnswear, question) =>
  userUnswear.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));


const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1
  }),

  incrementMistake: (userUnswear, questions, mistakes, maxMistakes, step) => {

    let answerIsCorrect = false;
    if (step + 1 >= questions.length) {
      return {
        type: ActionType.RESET,
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
        type: ActionType.RESET,
      };
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },

  decrementTime: () => {
    return {
      type: ActionType.DECREMENT_TIME,
      payload: 1000
    };
  },

  resetGame: () => {
    return {
      type: ActionType.RESET
    };
  },

  loadQuestions: (questions) => {
    return {
      type: ActionType.LOAD_QUESTIONS,
      payload: questions,
    };
  },

  registrateTimer: (id) => {

    return {
      type: ActionType.REGISTRATE_TIMER,
      payload: id
    };
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP: return Object.assign({}, state, {
      step: state.step + action.payload,
    });

    case ActionType.INCREMENT_MISTAKES: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload,
    });
    case ActionType.RESET: return Object.assign({}, initialState);

    case ActionType.DECREMENT_TIME:
      return Object.assign({}, state, {
        time: state.time - action.payload
      });

    case ActionType.REGISTRATE_TIMER: return Object.assign({}, state, {
      gameTimer: action.payload
    });
  }

  return state;
};


const Operation = {
  loadQuestion: () => (dispatch) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestion(response.data));
      });
  },
};

export {
  initialState,
  reducer,
  ActionCreator,
  isGenreAnswerCorrect,
  isArtistAnswerCorrect,
  Operation
};
