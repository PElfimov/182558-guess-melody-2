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

const answers = [true, true, false, true];

const changeCheckboxStatus = (wrapper, UserAnswers) => {
  wrapper.find(`.game__input`).forEach((node, index) => {
    let name = node.prop(`name`);
    node.simulate(`change`, {
      target: {
        name,
        checked: UserAnswers[index],
      }
    });
  });
};

describe(`GenreQuestionScreen component e2e tests`, () => {
  let wrapper;
  let callbackFunction;
  let form;

  beforeEach(() => {
    callbackFunction = jest.fn();
    wrapper = shallow(<GenreQuestionScreen
      question={question}
      screenIndex={0}
      onAnswer={callbackFunction}
    />
    );
    changeCheckboxStatus(wrapper, answers);
    form = wrapper.find(`.game__tracks`);
  });

  it(`Check data in callback function`, () => {

    form.simulate(`submit`, {
      preventDefault: () => {}
    });
    expect(callbackFunction).toHaveBeenCalledWith(answers);
  });

  it(`Check call count function`, () => {
    form.simulate(`submit`, {
      preventDefault: () => {}
    });
    expect(callbackFunction).toBeCalledTimes(1);
  });

  it(`Answer correctly changed status on true in state`, () => {
    const name = `answer-1`;
    expect(wrapper.state(`userAnswers`)[name]).toBeTruthy();
  });

  it(`Answer correctly changed status on false in state`, () => {
    const name = `answer-2`;
    expect(wrapper.state(`userAnswers`)[name]).toBeFalsy();
  });

  it(`Reset state working correctly`, () => {
    form.simulate(`submit`, {
      preventDefault: () => {}
    });
    expect(wrapper.state(`userAnswers`)).toEqual({
      "answer-0": false,
      "answer-1": false,
      "answer-2": false,
      "answer-3": false,
    });
  });
});
