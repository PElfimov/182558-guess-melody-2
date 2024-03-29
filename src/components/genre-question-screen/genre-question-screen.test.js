import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from './genre-question-screen';

const question =
{
  type: `genre`,
  genre: `rock`,
  answers: [{
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
  }],
};


it(`GenreQuestionScreen component render correctly`, () => {
  const tree = renderer.create(<GenreQuestionScreen
    question={question}
    screenIndex={0}
    onAnswer={() => {}}
    renderPlayer={jest.fn()}
    userAnswer={[false, false, false, false]}
    onClick={jest.fn()}
  />, {createNodeMock: () => ({})}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
