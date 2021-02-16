import { useState } from "react";
import Button from "./Button";
import Messsage from "./Messsage";
import Subtitle from "./Subtitle";
import shortid from "shortid";
import PropTypes from "prop-types";
function Gastos({ handleAgregarGastos, setCrearGasto }) {
  const [gasto, setGasto] = useState({
    nombre: "",
    cantidad: 0,
  });
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion
    if (
      gasto.cantidad < 1 ||
      isNaN(gasto.cantidad) ||
      gasto.nombre.trim() === ""
    ) {
      setError(true);
      return;
    }
    // creando gasto
    setError(false);
    gasto.id = shortid.generate();
    // pasar el componente al principal
    handleAgregarGastos(gasto);
    setCrearGasto(true);
    // resetear form
    setGasto({
      nombre: "",
      cantidad: 0,
    });
  };
  return (
    <section className="wrapperPregunta">
      <Subtitle subtitle="Ingresa tus gastos" />
      {error ? (
        <Messsage text="presupuesto incorrecto o nombre del presupuesto incorrecto" />
      ) : null}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          name="nombre"
          placeholder="Ejemplo: Gastos comida"
          value={gasto.nombre}
          onChange={(e) =>
            setGasto({ ...gasto, [e.target.name]: e.target.value })
          }
        />
        <input
          type="number"
          name="cantidad"
          className="input"
          placeholder="Ejemplo: 300"
          value={isNaN(gasto.cantidad) ? 0 : gasto.cantidad}
          onChange={(e) =>
            setGasto({ ...gasto, [e.target.name]: parseInt(e.target.value) })
          }
        />
        <Button type="submit" text="Enviar gasto" style={`enviar`} />
      </form>
    </section>
  );
}
Gastos.propTypes = {
  handleAgregarGastos: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};
export default Gastos;
