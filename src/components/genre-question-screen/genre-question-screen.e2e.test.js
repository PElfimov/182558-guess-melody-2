import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';

Enzyme.configure({adapter: new Adapter()});

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `pop`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `jazz`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    },
  ],
};

const changeCheckboxStatus = (wrapper, status = true) => {
  const input = wrapper.find(`.game__input`).first();
  const name = input.prop(`name`);
  input.simulate(`change`, {
    target: {
      name,
      checked: status
    }
  });

  return name;
};

describe(`GenreQuestionScreen component e2e tests`, () => {
  const answer = question.answers[0];
  let wrapper;
  let callbackFunction;

  beforeEach(() => {
    callbackFunction = jest.fn();
    wrapper = shallow(<GenreQuestionScreen
      question={question}
      screenIndex={0}
      onAnswer={callbackFunction}
    />
    );

    changeCheckboxStatus(wrapper);

    const form = wrapper.find(`.game__tracks`);
    form.simulate(`submit`, {
      preventDefault: () => {}
    });
  });

  it(`Check data in callback function`, () => {
    expect(callbackFunction).toHaveBeenCalledWith([answer]);
  });

  it(`Check call count function`, () => {
    expect(callbackFunction).toBeCalledTimes(1);
  });

  it(`Answer correctly changed status on true in state`, () => {
    const name = changeCheckboxStatus(wrapper);
    expect(wrapper.state(name)).toBeTruthy();
  });

  it(`Answer correctly changed status on false in state`, () => {
    const name = changeCheckboxStatus(wrapper, false);
    expect(wrapper.state(name)).toBeFalsy();
  });

  it(`Reset state working correctly`, () => {
    expect(wrapper.state()).toEqual(GenreQuestionScreen._getInitialState(question.answers));
  });
});
