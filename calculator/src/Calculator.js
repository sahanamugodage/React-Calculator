import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [output, setOutput] = useState('');

  const specialChars = ["%", "*", "/", "-", "+", "="];

  const calculate = (btnValue) => {
    if (btnValue === "=") {
      try {
        // eslint-disable-next-line no-eval
        setOutput(eval(output.replace("%", "/100")).toString());
      } catch (error) {
        setOutput("Error");
      }
    } else if (btnValue === "AC") {
      setOutput("");
    } else if (btnValue === "DEL") {
      setOutput(output.slice(0, -1));
    } else {
      if (specialChars.includes(btnValue) && specialChars.includes(output.slice(-1))) {
        return;
      }
      setOutput(output + btnValue);
    }
  };

  return (
    <div className="container">
      <input type="text" className="display" value={output} placeholder="" readOnly />

      <div className="buttons">
        {["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "00", ".", "="].map((btnValue) => (
          <button
            key={btnValue}
            className={specialChars.includes(btnValue) ? 'cal-op' : ''}
            onClick={() => calculate(btnValue)}
          >
            {btnValue}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
