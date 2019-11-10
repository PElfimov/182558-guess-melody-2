import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`GenreQuestionScreen component`, () => {
  it(`reacts correctly to submit form event`, () => {
    const question = {
      type: `genre`,
      genre: ``,
      answers: [{src: `http://somesrc/`, genre: ``}]
    };
    const screenIndex = 0;
    const userAnswer = [false, true, false, false];
    const onAnswer = jest.fn();
    const renderPlayer = jest.fn();
    const submitPrevention = jest.fn();
    const onClick = jest.fn();

    const genreQuestionScreen = mount(<GenreQuestionScreen
      userAnswer={userAnswer}
      question={question}
      screenIndex={screenIndex}
      onAnswer={onAnswer}
      renderPlayer={renderPlayer}
      onClick={onClick}
    />
    );


    const form = genreQuestionScreen.find(`form`);
    form.simulate(`submit`, {preventDefault: submitPrevention});

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(submitPrevention).toHaveBeenCalledTimes(1);
  });

  it(`is rendered with correct checks`, () => {
    const question = {
      type: `genre`,
      genre: ``,
      answers: [
        {src: `http://somesrc/`, genre: ``},
        {src: `http://somesrc/`, genre: ``},
        {src: `http://somesrc/`, genre: ``},
        {src: `http://somesrc/`, genre: ``}
      ]
    };
    const screenIndex = 0;
    const mistakes = 1;
    const gameTime = 0;
    const userAnswer = [false, true, false, false];
    const onAnswer = jest.fn();
    const renderPlayer = jest.fn();
    const onClick = jest.fn();

    const genreQuestionScreen = mount(<GenreQuestionScreen
      userAnswer={userAnswer}
      question={question}
      screenIndex={screenIndex}
      mistakes={mistakes}
      gameTime={gameTime}
      onAnswer={onAnswer}
      renderPlayer={renderPlayer}
      onClick={onClick}
    />
    );

    expect(genreQuestionScreen.find(`input`)).toHaveLength(4);
    expect(genreQuestionScreen.find(`input`).at(0).prop(`checked`)).toEqual(false);
    expect(genreQuestionScreen.find(`input`).at(1).prop(`checked`)).toEqual(true);
  });

  it(`handles input change event correctly`, () => {
    const question = {
      type: `genre`,
      genre: ``,
      answers: [
        {src: `http://somesrc/`, genre: ``},
        {src: `http://somesrc/`, genre: ``},
        {src: `http://somesrc/`, genre: ``},
        {src: `http://somesrc/`, genre: ``}
      ]
    };
    const screenIndex = 0;
    const mistakes = 1;
    const gameTime = 0;
    const userAnswer = [false, true, false, false];
    const onAnswer = jest.fn();
    const renderPlayer = jest.fn();
    const onClick = jest.fn();

    const genreQuestionScreen = mount(<GenreQuestionScreen
      userAnswer={userAnswer}
      question={question}
      screenIndex={screenIndex}
      mistakes={mistakes}
      gameTime={gameTime}
      onAnswer={onAnswer}
      renderPlayer={renderPlayer}
      onClick={onClick}
    />
    );

    genreQuestionScreen.find(`input`).at(0).simulate(`change`);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(0);
  });
});
