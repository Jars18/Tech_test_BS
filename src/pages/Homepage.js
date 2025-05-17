import "./Homepage.css";
import home from "../assets/images/home.png";
import Dropdown from "../components/Dropdown/Dropdown";
import LogButton from "../components/LogButton/LogButton";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/dropdownSlice";

function Homepage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUserChange = (id, name) => {
    dispatch(setUser({ id, name }));
  };

  return (
    <div className="Homepage">
      <div className="homepage-content">
        <img src={home} alt="Home logo" />
        <h1>Bienvenido a To Do's List</h1>
        <div className="account-selection">
          <h3>Selecciona tu cuenta</h3>
          <Dropdown selectedUser={user} onUserChange={handleUserChange} />
        </div>
        <LogButton selectedUserId={user.id} />
      </div>
    </div>
  );
}

export default Homepage;
