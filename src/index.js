import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App/App';


const init = () => {
  ReactDOM.render(
      <App time={6} mistakes={3} />,
      document.querySelector(`#root`)

  );
};

init();
