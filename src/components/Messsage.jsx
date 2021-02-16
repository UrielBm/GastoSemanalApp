import PropTypes from "prop-types";
const Messsage = ({ text }) => <p className="error">{text}</p>;
Messsage.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Messsage;
