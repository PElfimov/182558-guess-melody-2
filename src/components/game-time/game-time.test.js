import React from "react";
import renderer from "react-test-renderer";
import GameTime from "../game-time/game-time.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const handler = jest.fn();
    const tree = renderer
      .create(<GameTime
        time={5000}
        onTimeEnd={handler}
        onTimeUpdate={handler}
        registrateTimer={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
