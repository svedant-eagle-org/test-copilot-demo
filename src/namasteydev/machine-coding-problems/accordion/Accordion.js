import React, { useState } from "react";
import "./style.css";
import { items } from "./constants";
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    console.log("index", index);
    if (index !== openIndex) setOpenIndex(index);
    else setOpenIndex(null);
  };
  return (
    <div className="main-container">
      <div className="accordion-container">
        {items.length !== 0 &&
          items.map((item, index) => (
            <div key={index}>
              <button
                className="accordion-title"
                onClick={(e) => handleToggle(index)}
              >
                {item?.title}
                {openIndex !== index && (
                  <button className="rightArrow">{">"}</button>
                )}
                {openIndex === index && (
                  <button className="downArrow">{"↓"}</button>
                )}
              </button>
              {openIndex === index && (
                <div className="accordion-content">{item?.content}</div>
              )}
            </div>
          ))}
        {items.length === 0 && <div>No items available</div>}
      </div>
    </div>
  );
};
export default Accordion;
