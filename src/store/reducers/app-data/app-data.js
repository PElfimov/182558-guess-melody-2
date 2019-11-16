
import {ActionType} from "../../actions/action-creator";

const initialAppState = {
  questions: []
};

const appData = (state = initialAppState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS: return Object.assign({}, state, {
      questions: action.payload
    });
  }

  return state;
};

export default appData;
