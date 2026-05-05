import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
const OTPInput = () => {
  const ref1 = useRef();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useEffect(() => {
    if (ref1.current.value !== "" && ref2.current.value === "") {
      ref2.current.focus();
    } else if (ref2.current.value !== "" && ref3.current.value === "") {
      ref3.current.focus();
    } else if (ref3.current.value !== "" && ref4.current.value === "") {
      ref4.current.focus();
    }
  }, [text1, text2, text3, text4]);

  const handleInputChangeForFirstInput = (value) => {
    // Convert to string if it's not already (handles both "9" and 9)
    const strValue = String(value.trim());
    let valArr = strValue.split("");
    console.log("valArr ", valArr);
    valArr = valArr.filter((i) => +i >= 0 && +i <= 9);
    if (valArr.length >= 1) {
      const [a, b, c, d] = valArr;
      setText1(a || "");
      setText2(b || "");
      setText3(c || "");
      setText4(d || "");
    } else {
      handleInputChange(strValue, setText1);
    }
  };

  const handleInputChange = (value, setter) => {
    // Only allow single digit numbers (0-9)
    if (/^\d?$/.test(value)) {
      setter(value);
    }
  };

  const handleOnkeyDown2 = (e) => {
    if (text2 === "" && e.key === "Backspace") {
      ref1.current.focus();
    }
  };
  const handleOnkeyDown3 = (e) => {
    if (text3 === "" && e.key === "Backspace") {
      ref2.current.focus();
    }
  };

  const handleOnkeyDown4 = (e) => {
    if (text4 === "" && e.key === "Backspace") {
      ref3.current.focus();
    }
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <input
          type="text"
          ref={ref1}
          value={text1}
          maxLength={1}
          onChange={(e) => handleInputChangeForFirstInput(e.target.value)}
        />
      </div>
      <div className="child-div">
        <input
          type="text"
          ref={ref2}
          maxLength={1}
          pattern="[0-9]"
          value={text2}
          onKeyDown={(e) => handleOnkeyDown2(e)}
          onChange={(e) => handleInputChange(e.target.value, setText2)}
        />
      </div>
      <div className="child-div">
        <input
          type="text"
          ref={ref3}
          maxLength={1}
          pattern="[0-9]"
          value={text3}
          onKeyDown={(e) => handleOnkeyDown3(e)}
          onChange={(e) => handleInputChange(e.target.value, setText3)}
        />
      </div>
      <div className="child-div">
        <input
          type="text"
          ref={ref4}
          maxLength={1}
          pattern="[0-9]"
          value={text4}
          onKeyDown={(e) => handleOnkeyDown4(e)}
          onChange={(e) => handleInputChange(e.target.value, setText4)}
        />
      </div>
    </div>
  );
};
export default OTPInput;
