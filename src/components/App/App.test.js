import React from "react";
import renderer from 'react-test-renderer';
import App from './App';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      mistakes={0}
      time={0}
      onClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
