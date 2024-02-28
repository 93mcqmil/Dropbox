import "../Dropdown/Dropdown.css";

function Dropdownmenu() {
  return (
    <>
      <label htmlFor='name-select'>Choose a character: </label>;
      <select name='characters' id='charachter-select'></select>
      <option value=''>--Please choose an option</option>
    </>
  );
}
export default Dropdownmenu;
