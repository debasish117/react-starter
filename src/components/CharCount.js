import React , {useState} from "react";

export default function CharCount(){

  const handleChange=(event)=>{
    console.log("checked")
    setChar(event.target.value)
  }

  const[char, setChar] = useState("")
  return(
    <>
    <div className="container">
       <textarea className="form-control" id="text-box" rows="8" value={char} onChange={handleChange}>Enter The Text</textarea>
        <p>the number of charecter {char.length}</p>
    </div>
    </>
  );
}