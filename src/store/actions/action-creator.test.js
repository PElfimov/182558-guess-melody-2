
import {
  isGenreAnswerCorrect,
  ActionCreator
} from "./action-creator";

describe(`Business logic is correct`, () => {
  it(`Genre question is  checked correctly`, () => {
    expect(isGenreAnswerCorrect([false, true, false, false], {
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    })).toEqual(true);

    expect(isGenreAnswerCorrect([false, false, true, false], {
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    })).toEqual(false);
  });

});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step return correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: `INCREMENT_STEP`,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistakes return action with 0 payload`, () => {
    expect(ActionCreator.incrementMistake({
      artist: `correct`,
      picture: ``
    }, [{
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      }, answers: [{
        artist: `correct`,
        picture: ``
      }, {
        artist: `incorrect`,
        picture: ``
      }, {
        artist: `incorrect-2`,
        picture: ``
      }]
    }, {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      }, answers: [{
        artist: `correct`,
        picture: ``
      }, {
        artist: `incorrect`,
        picture: ``
      }, {
        artist: `incorrect-2`,
        picture: ``
      }]
    }], 0, Infinity, 0)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistakes return action with 1 payload`, () => {
    expect(ActionCreator.incrementMistake({
      artist: `incorrect`,
      picture: ``
    }, [{
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      }, answers: [{
        artist: `correct`,
        picture: ``
      }, {
        artist: `incorrect`,
        picture: ``
      }, {
        artist: `incorrect-2`,
        picture: ``
      }]
    }, {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      }, answers: [{
        artist: `correct`,
        picture: ``
      }, {
        artist: `incorrect`,
        picture: ``
      }, {
        artist: `incorrect-2`,
        picture: ``
      }]
    }], 0, Infinity, 0)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistakes return action with 0 payload`, () => {
    expect(ActionCreator.incrementMistake([false, true, false, false], [{
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    }], 0, Infinity, 0)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistakes return action with 1 payload`, () => {
    expect(ActionCreator.incrementMistake([false, false, true, false], [{
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    }], 0, Infinity, 0)).toEqual({
      type: `INCREMENT_MISTAKES`,
      payload: 1,
    });
  });

  it(`Action creator reset state if user is answer incorrectly and sum mistakes = max`, () => {
    expect(ActionCreator.incrementMistake({
      artist: `incorrect`,
      picture: ``
    }, [{
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      }, answers: [{
        artist: `correct`,
        picture: ``
      }, {
        artist: `incorrect`,
        picture: ``
      }, {
        artist: `incorrect-2`,
        picture: ``
      }]
    }], Infinity, 0, 0)).toEqual({
      type: `RESET`,
    });
  });

  it(`Action creator reset state if user is answer incorrectly and sum mistakes = max`, () => {
    expect(ActionCreator.incrementMistake([false, false, true, false], [{
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    }], Infinity, 0, 0)).toEqual({
      type: `RESET`
    });
  });

  it(`Action creator reset state if step more then lenght array questions`, () => {
    expect(ActionCreator.incrementMistake([false, true, false, false], [{
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    }, {
      type: `genre`,
      genre: `dance`,
      answers: [
        {
          src: `1`,
          genre: `rock`,
        },
        {
          src: `2`,
          genre: `dance`,
        },
        {
          src: `3`,
          genre: `jazz`,
        },
        {
          src: `4`,
          genre: `rock`,
        },
      ],
    }], Infinity, 0, 3)).toEqual({
      type: `RESET`
    });
  });

});
