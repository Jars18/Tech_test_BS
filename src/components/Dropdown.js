import "./Dropdown.css";

function Dropdown({ selectedUserId, onUserChange }) {
  const options = [
    { userId: "1", userName: "Edson Villarroel" },
    { userId: "2", userName: "Jhonny Lopez" },
    { userId: "3", userName: "Estefania de los Angeles Canelas" },
    { userId: "4", userName: "Mariana Rico" },
  ];

  const handleChange = (e) => {
    const selectedId = e.target.value;
    const selectedUser = options.find((option) => option.userId === selectedId);
    onUserChange(selectedId, selectedUser?.userName || "");
  };

  return (
    <div className="Dropdown">
      <select value={selectedUserId} onChange={handleChange} className="">
        <option value="">User</option>
        {options.map((option) => (
          <option key={option.userId} value={option.userId}>
            {option.userName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
