import React, {PureComponent} from 'react';
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import withLoading from '../with-loading/with-loading';

const WithLoadingPlayer = withLoading(AudioPlayer);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activePlayer: -1,
      };
    }

    handleClick(i) {
      this.setState((prevState) => ({
        activePlayer: prevState.activePlayer === i ? -1 : i
      }));
    }

    render() {
      const {activePlayer} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(it, i) => {
          return <WithLoadingPlayer
            src={it.src}
            isPlaying={i === activePlayer}
            onPlayButtonClick={() => this.handleClick(i)}
          />;
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
