import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from './audio-player';

const audioSrc = `https://ru-drivemusic.net/dl/bRsXc5_eA_aCygFCDE6QMg/1572529402/download_music/2019/10/nola-glupoe-serdce-jonvs-remix.mp3`;


describe(`AudioPlayer component tests`, () => {

  it(`Component render correctly`, () => {
    const handlePlayButtonClick = jest.fn();
    const tree = renderer.create(<AudioPlayer
      isPlaying={false}
      src={audioSrc}
      onPlayButtonClick={handlePlayButtonClick}
    />, {createNodeMock: () => ({})}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
