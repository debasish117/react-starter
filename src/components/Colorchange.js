import React, {useState} from "react";

export default function Colorchange(){

  const handleChange=()=> {
    setVisibility(!isVisible)
  }

  const[isVisible , setVisibility] = useState(true)
  return(
    <>
    <div className="container">
      {isVisible && <p>Hello , Debasish</p>}
      <button className="btn btn-primary" onClick={handleChange}> Hide / UnHide </button>
    </div>
    </>
  );
}