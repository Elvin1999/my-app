import logo from "./logo.svg";
import "./App.css";
import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { useState } from "react";

var items = [];
items.push({ index: 0, value: "Learn React", done: false });
items.push({ index: 1, value: "Go Shopping", done: true });
items.push({ index: 2, value: "Buy Flowers", done: true });
function App() {
  const [todoItems, setItems] = useState(items);
  function addItem(todoItem) {
    const newTodoItems = [
      {
        index: todoItems.length + 1,
        value: todoItem.newItemValue,
        done: false,
      },
      ...todoItems,
    ];

    setItems(newTodoItems);
  }

  function removeItem(itemIndex) {
    console.log(itemIndex);
    setItems(todoItems.filter((i) => i.index!==itemIndex));
    console.log(todoItems);
  }

  function changeStatus(itemIndex){
    var todo=todoItems.find(i=>i.index===itemIndex);
    todo.done=!todo.done;
    setItems(todoItems.filter((i) => true));
  }

  return (
    <div className="container">
      <ToDoHeader></ToDoHeader>
      <ToDoList todoItems={todoItems} removeItem={removeItem} changeStatus={changeStatus}></ToDoList>
      <ToDoForm addItem={addItem}></ToDoForm>
    </div>
  );
}

export default App;
