function Header({ totalPendientes }) {
  return (
    <header style={{ backgroundColor: "#1a1a2e", color: "white", padding: "20px" }}>
      <h1>TaskUPC — Mi Gestor Académico</h1>
      <p>Tareas pendientes: {totalPendientes}</p>
    </header>
  );
}

export default Header;