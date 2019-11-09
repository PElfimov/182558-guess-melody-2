const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `http://cdnet4.mixmuz.ru/b941501145f7/4ede66792ff9/285012b2af405562cbc2d3bb2a7fe5d8-2ea34336-11f7c734-1-64652aad67d/%D0%A1%D0%BF%D0%BB%D0%B8%D0%BD%20%E2%80%94%20%D0%92%D1%8B%D1%85%D0%BE%D0%B4%D0%B0%20%D0%BD%D0%B5%D1%82.mp3`,
      genre: `rock`,
    },
    {
      src: `http://cdnet4.mixmuz.ru/876ee31e472f/64259a564c8f/8505f6d50bd82f9f9ebccf3e7fe54539-1cca3d89-e315bd2-1-475515ca538/%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%20%E2%80%94%20%D0%BF%D0%BE%D0%B7%D0%B2%D0%BE%D0%BD%D0%B8%20%D0%BC%D0%BD%D0%B5.mp3`,
      genre: `pop`,
    },
    {
      src: `http://cdnet4.mixmuz.ru/d09bf3232d95/e6edf85427f7/e245b642819013ce188aa987aca0bbd8-2c7e6b32-11f59b2c-1-12fd5bce2f60/Karen%20Souza%2C%20Stereo%20Dub%20%E2%80%94%20Safe%20and%20Sound.mp3`,
      genre: `jazz`,
    },
    {
      src: `http://cdnet4.mixmuz.ru/e3086e17b32a/68d1548d1465/285012b2af405562cbc2d3bb2a7fe5d8-3bb50986-11f6ab4a-1-e6fd38bdbc7/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%8C%20%D0%B8%20%D0%A8%D1%83%D1%82%20%E2%80%94%20%D0%9B%D0%B5%D1%81%D0%BD%D0%B8%D0%BA.mp3`,
      genre: `rock`,
    }],
  },
  {
    type: `genre`,
    genre: `pop`,
    answers: [{
      src: `http://cdnet4.mixmuz.ru/b941501145f7/4ede66792ff9/285012b2af405562cbc2d3bb2a7fe5d8-2ea34336-11f7c734-1-64652aad67d/%D0%A1%D0%BF%D0%BB%D0%B8%D0%BD%20%E2%80%94%20%D0%92%D1%8B%D1%85%D0%BE%D0%B4%D0%B0%20%D0%BD%D0%B5%D1%82.mp3`,
      genre: `rock`,
    },
    {
      src: `http://cdnet4.mixmuz.ru/876ee31e472f/64259a564c8f/8505f6d50bd82f9f9ebccf3e7fe54539-1cca3d89-e315bd2-1-475515ca538/%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82%20%E2%80%94%20%D0%BF%D0%BE%D0%B7%D0%B2%D0%BE%D0%BD%D0%B8%20%D0%BC%D0%BD%D0%B5.mp3`,
      genre: `pop`,
    },
    {
      src: `http://cdnet4.mixmuz.ru/d09bf3232d95/e6edf85427f7/e245b642819013ce188aa987aca0bbd8-2c7e6b32-11f59b2c-1-12fd5bce2f60/Karen%20Souza%2C%20Stereo%20Dub%20%E2%80%94%20Safe%20and%20Sound.mp3`,
      genre: `jazz`,
    },
    {
      src: `http://cdnet4.mixmuz.ru/e3086e17b32a/68d1548d1465/285012b2af405562cbc2d3bb2a7fe5d8-3bb50986-11f6ab4a-1-e6fd38bdbc7/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%8C%20%D0%B8%20%D0%A8%D1%83%D1%82%20%E2%80%94%20%D0%9B%D0%B5%D1%81%D0%BD%D0%B8%D0%BA.mp3`,
      genre: `rock`,
    }],
  },

  {
    type: `genre`,
    genre: `dance`,
    answers: [
      {
        src: `http://cdnet4.mixmuz.ru/136d9180b2781/4ea0cc07e92/285012b2af405562cbc2d3bb2a7fe5d8-2ea34329-11f73c3d-1-1778c617706e/%D0%97%D0%B5%D0%BC%D1%84%D0%B8%D1%80%D0%B0%20%E2%80%94%20%D0%98%D1%81%D0%BA%D0%B0%D0%BB%D0%B0.mp3`,
        genre: `rock`,
      },
      {
        src: `http://cdnet4.mixmuz.ru/7715d75e8d20/1301b08590d65/a74d56d3e62f45a7e221af26f63adba8-3bb5099b-11f710f1-1-609eec1ee03/NILETTO%20%E2%80%94%20%D0%9B%D1%8E%D0%B1%D0%B8%D0%BC%D0%BA%D0%B0.mp3`,
        genre: `dance`,
      },
      {
        src: `http://cdnet4.mixmuz.ru/5a483062123c/d58b34fa073e/e245b642819013ce188aa987aca0bbd8-19dd6f5-11f59bb5-1-f18eb4b3383/Moon%20Hooch%2C%20Tonio%20Sagan%20%E2%80%94%20Acid%20Mountain.mp3`,
        genre: `jazz`,
      },
      {
        src: `http://cdnet4.mixmuz.ru/3b671a30ccc4/126c393eb7db9/285012b2af405562cbc2d3bb2a7fe5d8-2ea34335-11f71ac2-1-156556e2a5d6/%D0%A2%D0%B0%D0%BD%D1%86%D1%8B%20%D0%9C%D0%B8%D0%BD%D1%83%D1%81%20%E2%80%94%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%BA%D0%B0.mp3`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `JM Sicky feat. Eva Menson`,
      src: `http://cdnet4.mixmuz.ru/e771ba67e30e/fecd773341cb/6665f9097c87d8d243e4548bbb0f6575-2ea3434c-11f62fcf-1-abbb2f666b2/Linkin%20Park%20%E2%80%94%20Numb.mp3`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `JM Sicky feat. Eva Menson`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },

  {
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        src: `http://cdnet4.mixmuz.ru/136d9180b2781/4ea0cc07e92/285012b2af405562cbc2d3bb2a7fe5d8-2ea34329-11f73c3d-1-1778c617706e/%D0%97%D0%B5%D0%BC%D1%84%D0%B8%D1%80%D0%B0%20%E2%80%94%20%D0%98%D1%81%D0%BA%D0%B0%D0%BB%D0%B0.mp3`,
        genre: `rock`,
      },
      {
        src: `http://cdnet4.mixmuz.ru/7715d75e8d20/1301b08590d65/a74d56d3e62f45a7e221af26f63adba8-3bb5099b-11f710f1-1-609eec1ee03/NILETTO%20%E2%80%94%20%D0%9B%D1%8E%D0%B1%D0%B8%D0%BC%D0%BA%D0%B0.mp3`,
        genre: `dance`,
      },
      {
        src: `http://cdnet4.mixmuz.ru/5a483062123c/d58b34fa073e/e245b642819013ce188aa987aca0bbd8-19dd6f5-11f59bb5-1-f18eb4b3383/Moon%20Hooch%2C%20Tonio%20Sagan%20%E2%80%94%20Acid%20Mountain.mp3`,
        genre: `jazz`,
      },
      {
        src: `http://cdnet4.mixmuz.ru/3b671a30ccc4/126c393eb7db9/285012b2af405562cbc2d3bb2a7fe5d8-2ea34335-11f71ac2-1-156556e2a5d6/%D0%A2%D0%B0%D0%BD%D1%86%D1%8B%20%D0%9C%D0%B8%D0%BD%D1%83%D1%81%20%E2%80%94%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D0%BA%D0%B0.mp3`,
        genre: `rock`,
      },
    ],
  },
];


export default questions;
