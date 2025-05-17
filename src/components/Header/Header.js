import "./Header.css";
import LogButton from "../LogButton/LogButton";
function Header({ selectedUser }) {
  return (
    <header>
      <div>
        <h1>Hola {selectedUser.name}</h1>
        <h2> Estas son tus tareas pendientes </h2>
      </div>

      <LogButton />
    </header>
  );
}
export default Header;
