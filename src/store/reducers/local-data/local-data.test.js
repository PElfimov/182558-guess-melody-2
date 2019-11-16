
import localData from "./local-data";


describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(localData(undefined, {})).toEqual({
      step: -1,
      mistakes: 0,
      time: 300000,
      gameTimer: null
    });
  });
  it(`Reducer should increment current step by a given value`, () => {
    expect(localData({
      step: -1,
      mistakes: 0,
    }, {
      type: `INCREMENT_STEP`,
      payload: 1,
    })).toEqual({
      step: 0,
      mistakes: 0,
    });

    expect(localData({
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
    expect(localData({
      step: -1,
      mistakes: 0,
    }, {
      type: `INCREMENT_MISTAKES`,
      payload: 1,
    })).toEqual({
      step: -1,
      mistakes: 1,
    });

    expect(localData({
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
    expect(localData({
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
    expect(localData({
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

});


