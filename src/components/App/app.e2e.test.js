import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch E2E test`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<App mistakes={0} time={0} onClick={clickHandler} />);
  const startButton = app.find(`button`);
  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
