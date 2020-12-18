import React from "react";

const Square = ({ value, onClick }) => {
  // style or empty square or when has a value a  
  // square style for X or O depending on the value 
  const style = value ? `squares ${value}` : `squares`;
  //console.log(`squares ${value}`)
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;