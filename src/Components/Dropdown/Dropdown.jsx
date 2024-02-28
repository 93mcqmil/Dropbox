import "../Dropdown/Dropdown.css";
//funktion för min dropdown menu

function Dropdownmenu() {
  return (
    <>
      <label htmlFor='name-select'>Choose a character: </label>
      <select name='characters' id='charachter-select'>
        <option value=''>--Please choose an option</option>
      </select>
    </>
  );
}
export default Dropdownmenu;
