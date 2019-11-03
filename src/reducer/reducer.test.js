import {reducer, isGenreAnswerCorrect} from "./reducer";

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
    }, {
      type: `RESET`,
    })).toEqual({
      step: -1,
      mistakes: 0,
    });
  });
});
