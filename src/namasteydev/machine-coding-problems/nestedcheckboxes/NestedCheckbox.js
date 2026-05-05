import React, { useState } from "react";
import "./styles.css";
const NestedCheckbox = () => {
  const CheckboxesData = [
    {
      id: 1,
      label: "Fruits",
      checked: false,
      children: [
        { id: 2, label: "Apple", checked: false },
        { id: 3, label: "Banana", checked: false },
        {
          id: 4,
          label: "Citrus",
          checked: false,
          children: [
            { id: 5, label: "Orange", checked: false },
            { id: 6, label: "Lemon", checked: false },
          ],
        },
      ],
    },
    {
      id: 7,
      label: "Vegetables",
      checked: false,
      children: [
        { id: 8, label: "Carrot", checked: false },
        { id: 9, label: "Broccoli", checked: false },
      ],
    },
  ];
  const [list, setList] = useState(CheckboxesData);

  const markAllChildren = (childrenList, value) => {
    childrenList.forEach((item) => {
      item.checked = value;
      if (item?.children?.length > 0) {
        markAllChildren(item?.children, value);
      }
    });
    return childrenList;
  };

  const updateCheckboxState = (newList, id) => {
    newList.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
        // if the checked is parent then select or deselect all of its children!!!
        const currentValue = item.checked;
        if (item?.children?.length > 0) {
          markAllChildren(item?.children, currentValue);
        }
      }
      if (item?.children?.length > 0) {
        updateCheckboxState(item?.children, id);
      }
      return item;
    });
    return newList;
  };

  const checkChildAndUpdateParent = (newList) => {
    let count = 0;
    newList.forEach((item) => {
      if (!item?.children || item?.children?.length === 0) {
        // Leaf node - count if checked
        if (item.checked) count = count + 1;
      } else {
        // Parent node - recursively check children
        let countOfChecks = checkChildAndUpdateParent(item?.children);
        if (countOfChecks === item?.children?.length) {
          // All children are checked - check parent
          item.checked = true;
          count = count + 1;
        } else {
          // Not all children are checked - uncheck parent
          item.checked = false;
        }
      }
    });
    return count;
  };

  const handleCheckBoxClick = (id) => {
    // Create a deep copy to avoid mutating state
    let newList = JSON.parse(JSON.stringify(list));
    newList = updateCheckboxState(newList, id);
    checkChildAndUpdateParent(newList);
    setList(newList);
  };

  // console.log("list", list);
  return (
    <div>
      <CheckBoxComponent
        checkboxData={list}
        handleCheckBoxClick={handleCheckBoxClick}
      />
    </div>
  );
};

const CheckBoxComponent = ({ checkboxData, handleCheckBoxClick }) => {
  return (
    <div className="paddingLeft">
      <ul>
        {checkboxData.length > 0 &&
          checkboxData.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => handleCheckBoxClick(item?.id)}
                  data-testid={`checkbox-${item.label}`}
                />
                <span data-testid={`label-${item.label}`}>{item?.label}</span>
              </label>
              {item?.children?.length > 0 && (
                <CheckBoxComponent
                  checkboxData={item.children}
                  handleCheckBoxClick={handleCheckBoxClick}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default NestedCheckbox;
