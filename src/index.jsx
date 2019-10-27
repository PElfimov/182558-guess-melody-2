import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import questions from "./mocks/questions";

const init = () => {
  ReactDOM.render(
      <App time={6} mistakes={3} questions={questions} />,
      document.querySelector(`#root`)
  );
};

init();
