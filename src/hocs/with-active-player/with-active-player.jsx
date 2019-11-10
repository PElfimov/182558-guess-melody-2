import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import withAudioPlayer from "../with-audio-player/with-audio-player";

const AudioPlayerWrapped = withAudioPlayer(AudioPlayer);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        activePlayer: -1
      };
    }

    handleClick(index) {
      this.setState((prevState) => ({
        activePlayer: prevState.activePlayer === index ? -1 : index
      }));
    }

    render() {
      const {activePlayer} = this.state;

      return (
        <Component
          {...this.props}
          renderPlayer={(it, i) => {
            return (
              <AudioPlayerWrapped
                src={it.src}
                isPlaying={i === activePlayer}
                onPlayButtonClick={this.handleClick(i)}
              />
            );
          }}
        />
      );
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
