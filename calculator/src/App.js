import React, { useState } from "react";
import "./cal.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const buttonValue = e.target.value;

    if (buttonValue === "=") {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue("Error");
      }
    } else if (buttonValue === "AC") {
      setValue("");
    } else if (buttonValue === "Del") {
      setValue(value.slice(0, -1));
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <>
      <div className="cal">
        <div className="calculator">
          <h1>Calculator</h1>
          <input
            type="text"
            id="result"
            className="calinput"
            placeholder=""
            value={value}
            readOnly
          />
          <input
            type="button"
            className="cal-btn"
            value="AC"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn backspace"
            value="Del"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="."
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="/"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="*"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn equals"
            value="="
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="-"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="+"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="1"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="2"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="3"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="4"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="5"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="6"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="7"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="8"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="9"
            onClick={handleClick}
          />
          <input
            type="button"
            className="cal-btn"
            value="0"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
