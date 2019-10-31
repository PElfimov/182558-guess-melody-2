import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({ adapter: new Adapter() });

const src = `https://ru-drivemusic.net/dl/bRsXc5_eA_aCygFCDE6QMg/1572529402/download_music/2019/10/nola-glupoe-serdce-jonvs-remix.mp3`;

describe(`AudioPlayer components e2e test`, () => {
  const createWrapper = (isPlaying) => {
    const handlePlayButtonClick = jest.fn();
    return shallow(<AudioPlayer
      isPlaying={isPlaying}
      src={src}
      onPlayButtonClick={handlePlayButtonClick}
    />
    );
  };

  const click = (wrapper) => {
    wrapper.setSate({
      isLoading: false
    });
    const button = wrapper.find(`button`);
    button.simulate(`click`);
  };

  it(`On click play button component state isPlaying change to TRUE`, () => {
    const wrapper = createWrapper(false);
    click(wrapper);

    expect(wrapper.state().isPlaying).toBeTruthy();
  });
});

