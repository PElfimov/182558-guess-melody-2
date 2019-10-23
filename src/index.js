import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App/App';
import questions from './mocks/questions';


function handleClick() {

}

const init = () => {
  ReactDOM.render(<App
    time={6}
    mistakes={3}
    onClick={handleClick}
    questions={questions}
  />, document.querySelector(`#root`)
  );
};

init();
