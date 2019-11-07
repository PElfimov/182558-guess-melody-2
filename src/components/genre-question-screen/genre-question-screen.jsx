import React, {PureComponent} from "react";
import propTypes from "./prop-types";

export default class GenreQuestionScreen extends PureComponent {
  static _getInitialState(answers) {
    const initialState = {
      userAnswers: {}
    };

    answers.forEach((answer, i) => {
      Object.assign(initialState.userAnswers, {[`answer-${i}`]: false});
    });

    return initialState;
  }

  constructor(props) {
    super(props);

    this.state = GenreQuestionScreen._getInitialState(props.question.answers);

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange({target: {name, checked}}) {
    const userAnswers = Object.assign({}, this.state.userAnswers);
    userAnswers[name] = checked;
    this.setState({userAnswers});
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;
    onAnswer(this._getCheckedAnswer());
    this._resetState();
  }

  _getCheckedAnswer() {
    const {userAnswers} = this.state;
    const keys = Object.keys(userAnswers);

    let checkedAnswers = keys.map((el) => {
      return userAnswers[el];
    });

    return checkedAnswers;
  }

  _resetState() {
    const {answers} = this.props.question;
    this.setState(GenreQuestionScreen._getInitialState(answers));
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
                    checked={this.state.userAnswers[`answer-${i}`]}
                    id={`answer-${i}`}
                    onChange={this._handleChange}
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
