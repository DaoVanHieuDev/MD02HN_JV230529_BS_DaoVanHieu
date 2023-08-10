import React, { useState } from "react";
import "./Couter.css";
import ItemWord from "./ItemWord";
import InputTextari from "./InputTextari";
import ItemCase from "./ItemCase";

function CouterMain() {
  const [value, setValue] = useState([]);
  const onChange = (e) => {
    setValue(e.target.value);
  };

//   const onChangeLetter = (e) => {
//     setLetter(e.target.value);
//   };

const countWords = (wordCount) => {
    const words = wordCount.trim().split(/\s+/);
    return words.length;
  };
  
  const wordCount = countWords(value);
  

  return (
    <div className="wordCouter">
      <header>
        <img style={{ width: "50px" }} src="/images/letter.png" alt="" />{" "}
        <p> Word Counter</p>
      </header>
      <ItemWord count={value.length} letter={wordCount} />
      <InputTextari onChange={onChange} />
      <ItemCase />
    </div>
  );
}

export default CouterMain;
