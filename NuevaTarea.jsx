import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: "", materia: "", fecha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(form);
    navigate("/");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título" onChange={handleChange} required /><br /><br />
        <input name="materia" placeholder="Materia" onChange={handleChange} required /><br /><br />
        <input name="fecha" type="date" onChange={handleChange} required /><br /><br />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
}

export default NuevaTarea;