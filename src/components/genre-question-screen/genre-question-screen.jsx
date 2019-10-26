import React from "react";
import PropTypes from "prop-types";

export default function GenreQuestionScreen(props) {
  const {screenIndex, question, onAnswer} = props;
  const {answers, genre} = question;
  const userAnswers = [];
  answers.map((it) => {
    userAnswers.push({
      name: it.genre,
      isCheck: false
    });
  });

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <div className="timer__value">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(userAnswers);
          }}>
          {answers.map((it, i) => {
            return (
              <div key={`${screenIndex}-answer-${i}`} className="track">
                <button className="track__button track__button--play" type="button" />
                <div className="track__status">
                  <audio />
                </div>
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`${i}`}
                    id={`answer-${i}`}
                    onChange={(evt) => {
                      _handleChange(evt, userAnswers);
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>
                    Отметить
                  </label>
                </div>
              </div>
            );
          })}
          <button className="game__submit button" type="submit">
            Ответить
          </button>
        </form>
      </section>
    </section>
  );
}

const _handleChange = (evt, userAnswers) => {
  const target = evt.target.value;
  userAnswers[target].isCheck = !userAnswers[target].isCheck;
};

GenreQuestionScreen.propTypes = {
  question: PropTypes.exact({
    type: PropTypes.oneOf([`genre`, `artist`]),
    genre: PropTypes.oneOf([`rock`, `pop`, `jazz`, `folk`]),
    answers: PropTypes.arrayOf(
        PropTypes.exact({
          src: PropTypes.string,
          genre: PropTypes.string
        })
    )
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired
};
