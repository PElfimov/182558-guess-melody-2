import React from "react";
import renderer from 'react-test-renderer';
import WelcomeScreen from './WelcomeScreen';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      mistakes={0}
      time={0}
      onClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
