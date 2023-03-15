import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim() === "") {
      return;
    }
    const newItems = [...items, inputValue];
    setItems(newItems);
    setInputValue("");
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new item"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoList;
