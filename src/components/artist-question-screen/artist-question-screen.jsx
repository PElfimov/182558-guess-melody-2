import React from "react";
import PropTypes from "prop-types";

const ArtistQuestionScreen = (props) => {
  const {question, screenIndex, onAnswer, renderPlayer} = props;
  const {answers, song} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">{renderPlayer(song, 0)}</div>
      </div>
      <form
        className="game__artist"
        onChange={(evt) => {
          onAnswer([JSON.parse(evt.target.value)]);
        }}>
        {answers.map((answer, i) => {
          return (
            <div key={`${screenIndex}-answer-${i}`} className="artist">
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={JSON.stringify(answer)}
                id={`answer-${i}`}
              />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>
          );
        })}
      </form>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.exact({
    type: PropTypes.oneOf([`genre`, `artist`]),
    song: PropTypes.exact({
      artist: PropTypes.string,
      src: PropTypes.string
    }),
    answers: PropTypes.arrayOf(
        PropTypes.exact({
          picture: PropTypes.string,
          artist: PropTypes.string
        })
    )
  }).isRequired,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func,
  renderPlayer: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;
