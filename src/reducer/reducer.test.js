import MockAdapter from "axios-mock-adapter";
import api from "../api";
import {
  reducer,
  isGenreAnswerCorrect,
  ActionCreator,
  Operation
} from "./reducer";

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

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      step: -1,
      mistakes: 0,
      time: 300000,
      gameTimer: null
    });
  });
  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: `INCREMENT_STEP`,
      payload: 1,
    })).toEqual({
      step: 0,
      mistakes: 0,
    });

    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: `INCREMENT_STEP`,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakes: 0,
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: `INCREMENT_MISTAKES`,
      payload: 1,
    })).toEqual({
      step: -1,
      mistakes: 1,
    });

    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: `INCREMENT_MISTAKES`,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakes: 0,
    });
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      step: 898,
      mistakes: 34,
      time: 300000,
      gameTimer: null

    }, {
      type: `RESET`,
    })).toEqual({
      step: -1,
      mistakes: 0,
      time: 300000,
      gameTimer: null
    });
  });

  it(`Reducer correctly decrements time`, () => {
    expect(reducer({
      questionStep: -1,
      mistakes: 0,
      time: 300000,
      gameTimer: null
    }, {
      type: `DECREMENT_TIME`,
      payload: 1000
    }
    )).toEqual({
      questionStep: -1,
      mistakes: 0,
      time: 299000,
      gameTimer: null
    });
  });
  it(`Should make a correct API call  to /questions`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadQuestion();

    apiMock
      .onGet(`/question`)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
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
