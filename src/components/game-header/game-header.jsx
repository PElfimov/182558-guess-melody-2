import React from "react";
import propTypes from "./prop-types.js";
import GameTime from "../game-time/game-time.jsx";
import GameMistakes from "../game-mistakes/game-mistakes.jsx";

const GameHeader = ({mistakes, gameTime, onTimeUpdate, onTimeEnd, registrateTimer}) => {
  return (
    <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle
          className="timer__line"
          cx="390"
          cy="390"
          r="370"
          style={{
            filter: `url(#blur)`,
            transform: `rotate(-90deg) scaleY(-1)`,
            transformOrigin: `center`
          }}
        />
      </svg>

      <GameTime
        time={gameTime}
        onTimeUpdate={onTimeUpdate}
        onTimeEnd={onTimeEnd}
        registrateTimer={registrateTimer}
      />

      <GameMistakes mistakes={mistakes} />
    </header>
  );
};

GameHeader.propTypes = propTypes;

export default GameHeader;
