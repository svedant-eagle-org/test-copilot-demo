import React, { useRef, useState } from "react";
import "./styles.css";

const ChipsComponent = () => {
  const [list, setList] = useState([]);
  const [searchText, setSearchInputText] = useState("");
  const ref = useRef();

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      console.log("Enter");
      setList([...list, { id: list.length + 1, text: searchText }]);
      ref.current.value = "";
      setSearchInputText("");
    }
  };

  const handleDelete = (id) => {
    setList((prevList) => [...prevList.filter((item) => item.id !== id)]);
  };
  return (
    <div className="main-chip-container">
      <div className="chips-component">
        <h1>Chips Input</h1>
        <div>
          <input
            placeholder="Type a chip and press a tag"
            className="search-input"
            onChange={(e) => setSearchInputText(e?.target?.value)}
            onKeyDown={(e) => handleOnKeyDown(e)}
            ref={ref}
          />
          <div className="chips-list">
            {list.map((item, index) => (
              <div className="chips-item">
                <button className="noBroder">{item.text}</button>
                <button
                  className="noBroder"
                  onClick={(e) => handleDelete(item?.id)}
                >
                  ⨯
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChipsComponent;
