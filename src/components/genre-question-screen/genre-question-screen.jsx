import React from "react";
import PropTypes from "prop-types";

const GenreQuestionScreen = (props) => {
  const _handleSubmit = (evt) => {
    const {userAnswer} = props;
    evt.preventDefault();
    const {onAnswer} = props;
    onAnswer(userAnswer);
  };

  const {question, screenIndex, renderPlayer, userAnswer, onClick} = props;
  const {answers, genre} = question;
  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={_handleSubmit}>
        {answers.map((answer, i) => {
          return (
            <div key={`${screenIndex}-answer-${i}`} className="track">
              {renderPlayer(answer, i + screenIndex * 10)}
              <div className="game__answer">
                <input
                  className="game__input visually-hidden"
                  type="checkbox"
                  name={`answer-${i}`}
                  value={`answer-${i}`}
                  checked={userAnswer[i]}
                  id={`answer-${i}`}
                  onChange={() => onClick(i)}
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
  );
};

GenreQuestionScreen.propTypes = {
  question: PropTypes.exact({
    type: PropTypes.oneOf([`genre`, `artist`]),
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(
        PropTypes.exact({
          src: PropTypes.string,
          genre: PropTypes.string
        })
    )
  }).isRequired,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func,
  renderPlayer: PropTypes.func.isRequired,
  userAnswer: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onClick: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
