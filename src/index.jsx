import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import questions from "./mocks/questions";

const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const maxMistakes = 5;

  ReactDOM.render(
      <Provider store={store}>
        <App mistakes={5} maxMistakes={maxMistakes} questions={questions} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
