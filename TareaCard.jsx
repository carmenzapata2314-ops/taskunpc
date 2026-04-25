import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "8px", opacity: completada ? 0.6 : 1 }}>
      <h3 style={{ textDecoration: completada ? "line-through" : "none" }}>{titulo}</h3>
      <p>Materia: {materia}</p>
      <p>Fecha: {fecha}</p>
      <p>Estado: {completada ? "✅ Completada" : "⏳ Pendiente"}</p>
      <input type="checkbox" checked={completada} onChange={() => toggleTarea(id)} /> Marcar completada
      <br /><br />
      <button onClick={() => navigate(`/tarea/${id}`)}>Ver detalle</button>
    </div>
  );
}

export default TareaCard;