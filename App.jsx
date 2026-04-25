import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import { tareasIniciales } from "./data/tareas";

function App() {
  const pendientes = tareasIniciales.filter(t => !t.completada).length;

  return (
    <div>
      <Header totalPendientes={pendientes} />
      <ListaTareas />
    </div>
  );
}

export default App;