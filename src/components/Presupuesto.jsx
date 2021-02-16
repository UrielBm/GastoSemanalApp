import { useState } from "react";
import Button from "./Button";
import Messsage from "./Messsage";
import Subtitle from "./Subtitle";
import PropTypes from "prop-types";
const Presupuesto = ({
  setPresupuestoGlobal,
  setPresupuestoRestante,
  setShowPresupuesto,
}) => {
  const [presupuesto, SetPresupuesto] = useState(0);
  const [error, setError] = useState(false);
  const handleOnChange = (e) => {
    const { value } = e.target;
    SetPresupuesto(parseInt(value, 10));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // validacion de presupuesto
    if (presupuesto < 1 || isNaN(presupuesto)) {
      setError(true);
      return;
    }
    //Pasando la validación
    setError(false);
    setPresupuestoGlobal(presupuesto);
    setPresupuestoRestante(presupuesto);
    setShowPresupuesto(false);
  };
  return (
    <section className="wrapperPregunta">
      <Subtitle subtitle="¿Cuál es tú presupuesto?" />
      {error ? <Messsage text="Presupuesto incorrecto" /> : null}
      <form className="form" onSubmit={handleOnSubmit}>
        <input
          type="number"
          className="input"
          placeholder="Coloca tu presupuesto semanal"
          onChange={handleOnChange}
        />
        <Button type="submit" text="Enviar Presupuesto" style={`enviar`} />
      </form>
    </section>
  );
};
Presupuesto.propTypes = {
  setPresupuestoGlobal: PropTypes.func.isRequired,
  setPresupuestoRestante: PropTypes.func.isRequired,
  setShowPresupuesto: PropTypes.func.isRequired,
};
export default Presupuesto;
