import { useState } from "react";
import { BiCommentAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  // const todoNameElement = useRef();
  // const dueDateElement = useRef();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = (event) => {
    // event.preventDefault();
    // const todoName = todoNameElement.current.value;
    // const dueDate = dueDateElement.current.value;
    // todoNameElement.current.value = "";
    // dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    //NOTE:THSE SAME OPERATION IS PERFORMED USING useRef hook by commenting the useState codes
    setDueDate("");
    setTodoName("");
  };
  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        <div classNameName="col-6">
          <input
            // ref={todoNameElement}
            type="text"
            placeholder="Enter Your TODO Here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div classNameName="col-4">
          <input
            // ref={dueDateElement}
            type="date"
            onChange={handleDateChange}
            value={dueDate}
          />
        </div>
        <div classNameName="col-2">
          <button
            onClick={handleAddButtonClicked}
            classNameName="btn btn-success kg-button"
          >
            <BiCommentAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
