import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find(t => t.id === Number(id));

  if (!tarea) return <p>Tarea no encontrada</p>;

  function handleEliminar() {
    eliminarTarea(tarea.id);
    navigate("/");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{tarea.titulo}</h2>
      <p>Materia: {tarea.materia}</p>
      <p>Fecha: {tarea.fecha}</p>
      <p>Estado: {tarea.completada ? "✅ Completada" : "⏳ Pendiente"}</p>
      <button onClick={handleEliminar} style={{ color: "red" }}>Eliminar tarea</button>
      <br /><br />
      <button onClick={() => navigate("/")}>Volver</button>
    </div>
  );
}

export default DetalleTarea;