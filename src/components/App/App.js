import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';


export default class App extends React.PureComponent {
  render() {
    return (
      <WelcomeScreen
        mistakes={this.props.mistakes}
        time={this.props.time}
        onClick={this.props.onClick}
      />
    );
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
