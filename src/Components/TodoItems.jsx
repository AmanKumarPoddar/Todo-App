import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div classNameName={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClicked={onDeleteClick}
          Key={index}
        />
      ))}
    </div>
  );
};

export default TodoItems;
