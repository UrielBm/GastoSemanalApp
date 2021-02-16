import PropTypes from "prop-types";
const CardGasto = ({ gasto }) => {
  const { nombre, cantidad } = gasto;
  return (
    <p className="gastos-realizados">
      {nombre} <span className="gasto">$ {cantidad}</span>
    </p>
  );
};
CardGasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};
export default CardGasto;
