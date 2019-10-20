import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App/App';

function handleClick() {

}

const init = () => {
  ReactDOM.render(
      <App time={6} mistakes={3} onClick={handleClick} />,
      document.querySelector(`#root`)
  );
};

init();
