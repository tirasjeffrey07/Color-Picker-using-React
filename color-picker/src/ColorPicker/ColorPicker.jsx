import React, { useState, useEffect } from "react";

import styles from "./ColorPicker.module.css";

const ColorPicker = () => {
  const [color1, setColor1] = useState("#98D4DB");
  const [color2, setColor2] = useState("#EB96AA");
  const [degree, setDegree] = useState("45");

  useEffect(() => {
    document.body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
  }, [color1, color2, degree]);

  const updateBackgroundGradient = () => {
    document.body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})`;

  };

  const handleColor1Change = (event) => {
    setColor1(event.target.value);
    updateBackgroundGradient();
  };
  const handleColor2Change = (event) => {
    setColor2(event.target.value);
    updateBackgroundGradient();
  };

  const handleDegreeChange = (event) => {
    let actualDegree = parseInt(event.target.value)
    setDegree(actualDegree);
    updateBackgroundGradient();
  };

  return (
    <>
    <div className={styles.headingContainer}>
      <h1 className={styles.customFont} style={{fontSize:"5.5rem"}} >Pick the colors!</h1>
      <p style={{fontSize:"1.1rem"}}>Gradient won't update if the degrees field is empty</p>
    </div>
      <div className={styles.container}>
        <input type="color" value={color1} onChange={handleColor1Change} />
        <input type="color" value={color2} onChange={handleColor2Change} />
        <input
          type="number"
          min={0}
          max={360}
          value={degree}
          onChange={handleDegreeChange}
        />
      </div>
    </>
  );
};

export default ColorPicker;
