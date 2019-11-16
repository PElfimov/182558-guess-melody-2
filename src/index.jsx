import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer, Operation} from "./store/reducers/reducer";
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {compose} from "recompose";
import App from "./components/app/app";
import configureAPI from "./api";

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  const maxMistakes = 5;
  store.dispatch(Operation.loadQuestions());

  ReactDOM.render(
      <Provider store={store}>
        <App mistakes={5} maxMistakes={maxMistakes} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
