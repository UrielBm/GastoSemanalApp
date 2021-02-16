import CardGasto from "./CardGasto";
import Subtitle from "./Subtitle";
import PropTypes from "prop-types";
function List({ arrayGastos }) {
  return (
    <section className="wrapperList">
      <Subtitle subtitle="lista de gastos" />
      {arrayGastos.map((gasto) => {
        return <CardGasto gasto={gasto} key={gasto.id} />;
      })}
    </section>
  );
}
List.propTypes = {
  arrayGastos: PropTypes.array.isRequired,
};
export default List;
