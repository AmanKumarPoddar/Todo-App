import { MdDelete } from "react-icons/md";
const TodoItem = ({ todoName, todoDate, onDeleteClicked, Key }) => {
  return (
    <div classNameName="container ">
      <div classNameName="row kg-row">
        <div classNameName="col-6">{todoName}</div>
        <div classNameName="col-4">{todoDate}</div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button"
            onClick={() => onDeleteClicked(Key)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
