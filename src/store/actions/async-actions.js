import {ActionCreator} from "./action-creator";

const Operation = {
  loadQuestions: () => (dispatch, _, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      });
  }
};

export default Operation;
