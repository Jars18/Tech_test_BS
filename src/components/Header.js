import "./Header.css";
import LogButton from "../components/LogButton";
function Header({ isLoggedIn, setIsLoggedIn, selectedUserId, selectedNameId }) {
  return (
    <header>
      <div>
        <h1>Hola {selectedNameId}</h1>
        <h2> Estas son tus tareas pendientes </h2>
      </div>

      <LogButton
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        selectedUserId={selectedUserId}
      />
    </header>
  );
}
export default Header;
