import {ActionType, ActionCreator} from "../actions/action-creator";
const GAME_TIME_MINUTES = 5;

const initialState = {
  step: -1,
  mistakes: 0,
  questions: [],
  time: GAME_TIME_MINUTES * 60 * 1000,
  gameTimer: null

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
    case ActionType.LOAD_QUESTIONS: return Object.assign({}, state, {
      questions: action.payload
    });
  }

  return state;
};

const Operation = {
  loadQuestions: () => (dispatch, _, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      });
  }
};

export {
  initialState,
  reducer,
  Operation
};