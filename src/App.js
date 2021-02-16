import { useEffect, useState } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Gastos from "./components/Gastos";
import List from "./components/List";
import Presupuesto from "./components/Presupuesto";
import Title from "./components/Title";
function App() {
  const [presupuestoGlobal, setPresepuestoGlobal] = useState(0);
  const [presupuestoRestante, setPresupuestoRestante] = useState(0);
  const [showPresupuesto, setShowPresupuesto] = useState(true);
  const [arrayGastos, setArrayGastos] = useState([]);
  const [gasto, guardargasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);
  useEffect(() => {
    if (crearGasto) {
      setArrayGastos([...arrayGastos, gasto]);
      const Resta = presupuestoRestante - gasto.cantidad;
      setPresupuestoRestante(Resta);
    }
    setCrearGasto(false);
  }, [gasto]);
  return (
    <main className="MainWrapper">
      <Title title="Gasto semanal" />
      <section className="wrapperSection">
        {showPresupuesto ? (
          <Presupuesto
            setPresupuestoGlobal={setPresepuestoGlobal}
            setPresupuestoRestante={setPresupuestoRestante}
            setShowPresupuesto={setShowPresupuesto}
          />
        ) : (
          <>
            <Gastos
              handleAgregarGastos={guardargasto}
              setCrearGasto={setCrearGasto}
            />
            <div>
              <List arrayGastos={arrayGastos} />
              <ControlPresupuesto
                presupuesto={presupuestoGlobal}
                restante={presupuestoRestante}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
