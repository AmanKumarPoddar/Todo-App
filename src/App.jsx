import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import { useState } from "react";

import TodoItems from "./Components/TodoItems";
import WelcomeMesasge from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (index) => {
    todoItems.splice(index, 1);
    let newItems = [...todoItems];
    setTodoItems(newItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMesasge />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
