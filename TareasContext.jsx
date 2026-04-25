import { createContext, useContext, useState, useEffect } from "react";

const TareasContext = createContext();

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [
      { id: 1, titulo: "Parcial de Cálculo", materia: "Matemáticas", fecha: "2025-05-10", completada: false },
      { id: 2, titulo: "Informe de Laboratorio", materia: "Física", fecha: "2025-05-08", completada: true },
      { id: 3, titulo: "Taller de Programación", materia: "Sistemas", fecha: "2025-05-12", completada: false },
      { id: 4, titulo: "Exposición de Historia", materia: "Historia", fecha: "2025-05-15", completada: false },
      { id: 5, titulo: "Proyecto Final Web", materia: "Programación Web", fecha: "2025-05-20", completada: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  function toggleTarea(id) {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  }

  function agregarTarea(nueva) {
    const nuevaTarea = { ...nueva, id: Date.now(), completada: false };
    setTareas([...tareas, nuevaTarea]);
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter(t => t.id !== id));
  }

  return (
    <TareasContext.Provider value={{ tareas, toggleTarea, agregarTarea, eliminarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  return useContext(TareasContext);
}