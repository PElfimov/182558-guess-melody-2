import PropTypes from "prop-types";

export default {
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  registrateTimer: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired
};
