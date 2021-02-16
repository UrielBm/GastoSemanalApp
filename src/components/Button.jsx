import PropTypes from "prop-types";
const Button = ({ type, text, action, style }) => {
  const handleOnClick = () => {
    if (action) {
      action();
    }
  };
  return (
    <button type={type} className={style} onClick={handleOnClick}>
      {text}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  style: PropTypes.string.isRequired,
};
export default Button;
