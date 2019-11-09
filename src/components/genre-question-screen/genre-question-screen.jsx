import React, {PureComponent} from "react";
import propTypes from "./prop-types";

export default class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    const answers = this.props.question.answers;

    this.state = {
      userAnswer: new Array(answers.length).fill(false)
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(i) {
    const userAnswer = [...this.state.userAnswer];
    userAnswer[i] = !userAnswer[i];
    this.setState({userAnswer});
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;
    onAnswer(this.state.userAnswer);
    this._resetState();
  }

  _resetState() {
    const answers = this.props.question.answers;
    this.setState({userAnswer: new Array(answers.length).fill(false)});
  }

  render() {
    const {question, screenIndex, renderPlayer} = this.props;
    const {answers, genre} = question;
    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={this._handleSubmit}>
          {answers.map((answer, i) => {
            return (
              <div key={`${screenIndex}-answer-${i}`} className="track">
                {renderPlayer(answer, i)}
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name={`answer-${i}`}
                    value={`answer-${i}`}
                    checked={this.state.userAnswer[i]}
                    id={`answer-${i}`}
                    onChange={() => this._handleChange(i)}
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
  }
}

GenreQuestionScreen.propTypes = propTypes;
