import PropTypes from "prop-types";
const Subtitle = ({ subtitle }) => <h2 className="subtitle">{subtitle}</h2>;
Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
export default Subtitle;
