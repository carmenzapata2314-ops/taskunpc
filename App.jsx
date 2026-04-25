import { Routes, Route } from "react-router-dom";
import { useTareas } from "./context/TareasContext";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";

function App() {
  const { tareas } = useTareas();
  const pendientes = tareas.filter(t => !t.completada).length;

  return (
    <div>
      <Header totalPendientes={pendientes} />
      <Routes>
        <Route path="/" element={<ListaTareas />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </div>
  );
}

export default App;