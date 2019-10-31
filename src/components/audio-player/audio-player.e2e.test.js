import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});
const audioSrc = `https://ru-drivemusic.net/dl/bRsXc5_eA_aCygFCDE6QMg/1572529402/download_music/2019/10/nola-glupoe-serdce-jonvs-remix.mp3`;

[`pause`, `play`].forEach((item) => jest.spyOn(window.HTMLMediaElement.prototype, item).mockImplementation(() => {}));

describe(`AudioPlayer components e2e test`, () => {
  const createWrapper = (isPlaying) => {
    const handlePlayButtonClick = jest.fn();
    return mount(<AudioPlayer
      isPlaying={isPlaying}
      src={audioSrc}
      onPlayButtonClick={handlePlayButtonClick}
    />
    );
  };
  const click = (wrapper) => {
    wrapper.setState({isLoading: false});

    const button = wrapper.find(`button`);
    button.simulate(`click`);
  };

  it(`On click play button component state isPlaying change to TRUE`, () => {
    const wrapper = createWrapper(false);
    click(wrapper);

    expect(wrapper.state().isPlaying).toBeTruthy();
  });

  it(`On click play button component state isPlaying change to FALSE`, () => {
    const wrapper = createWrapper(true);
    click(wrapper);

    expect(wrapper.state().isPlaying).toBeFalsy();
  });
});
