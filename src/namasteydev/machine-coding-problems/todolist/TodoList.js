import React, { useRef, useState } from "react";
import "./style.css";
const TodoList = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const ref = useRef();
  const [list, setList] = useState([]);

  const handleAddList = () => {
    searchInputText !== "" &&
      setList((prevList) => [
        ...prevList,
        { id: prevList.length + 1, text: searchInputText, completed: false },
      ]);
    setSearchInputText("");
    ref.current.value = "";
  };

  const deleteFromList = (id) => {
    setList((prevList) => [...prevList.filter((item) => item.id !== id)]);
  };

  const handleCheckbox = (id) => {
    const selectedItem = list.find((item) => item.id === id);
    const newObj = { ...selectedItem, completed: !selectedItem.completed };
    const updatedList = list.map((item) => {
      if (item.id === id) item = newObj;
      return item;
    });
    setList(updatedList);
  };

  return (
    <div className="container">
      <div className="main">
        <h1>TO DO LIST</h1>
        <div className="search-bar">
          <input
            placeholder="Enter todo"
            className="search-input"
            onChange={(e) => setSearchInputText(e?.target?.value)}
            ref={ref}
          ></input>
          <button className="Add-button" onClick={(e) => handleAddList(e)}>
            Add
          </button>
        </div>
        <div className="display-list">
          {list.length > 0 && (
            <ul>
              {list.map((item, index) => (
                <li key={item.id} className="list-item">
                  <div className="list-item-box">
                    <input
                      type="checkbox"
                      onClick={(e) => handleCheckbox(item.id)}
                      checked={item.completed}
                    />
                    <p className={item.completed ? "text-list" : ""}>
                      {item.text}
                    </p>
                    <button onClick={(e) => deleteFromList(item.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default TodoList;
