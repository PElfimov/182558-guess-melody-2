import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import withAnswers from './with-answers';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {onClick, userAnswer} = props;

  return (
    <div>
      <ul>
        {userAnswer.map((_, index) => {
          return <li key={`item-${index}`} onClick={() => onClick(index)}></li>;
        })}
      </ul>
    </div>
  );
};

MockComponent.propTypes = {
  userAnswer: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func.isRequired
};


describe(`Component return by withAnswers function`, () => {
  it(`reacts correctly to click event`, () => {
    const screenIndex = 0;
    const question = {
      answers: [
        {
          src: `some/src`,
          genre: `some genre`
        },
        {
          src: `some/src`,
          genre: `some genre`
        },
        {
          src: `some/src`,
          genre: `some genre`
        },
        {
          src: `some/src`,
          genre: `some genre`
        }
      ]
    };
    const MockComponentWrapped = withAnswers(MockComponent);
    const wrapper = mount(<MockComponentWrapped question={question} screenIndex={screenIndex} />
    );


    wrapper.find(`li`).at(2).simulate(`click`);
    expect(wrapper.state(`answer`)).toEqual([false, false, true, false]);
  });
});
