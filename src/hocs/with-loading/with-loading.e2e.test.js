import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import withLoading from './with-loading';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {onLoad} = props;

  return <audio onCanPlayThrough={onLoad} />;
};

MockComponent.propTypes = {
  onLoad: PropTypes.func.isRequired
};

describe(`Component return by withLoading function`, () => {
  it(`updates state correctly`, () => {
    const AudioPlayer = withLoading(MockComponent);
    const player = mount(<AudioPlayer />
    );

    expect(player.state(`isLoading`)).toEqual(true);

    player.find(`audio`).simulate(`canplaythrough`);
    expect(player.state(`isLoading`)).toEqual(false);
  });
});
