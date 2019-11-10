import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

describe(`Player component`, () => {
  it(`reacts correctly to click event`, () => {
    const mocks = {
      isPlaying: false,
      src: ``,
      isLoading: false,
      onPlayButtonClick: jest.fn(),
      onLoad: jest.fn()
    };

    const {isPlaying, src, isLoading, onPlayButtonClick, onLoad} = mocks;

    const player = mount(<AudioPlayer
      isPlaying={isPlaying}
      src={src}
      isLoading={isLoading}
      onPlayButtonClick={onPlayButtonClick}
      onLoad={onLoad}
    />
    );

    const onPlayMock = jest.fn();
    const onPauseMock = jest.fn();

    player.instance()._audioRef.current.pause = onPauseMock;
    player.instance()._audioRef.current.play = onPlayMock;

    player.find(`button`).simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
  });
});
