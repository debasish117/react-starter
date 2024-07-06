import React,{useState} from "react";


export default function Todolist(){
  const handleTextChange=()=>{
    setFinal(text)
  }

  const handleOnChange = (event) => {
    console.log("event", event.target.value)
    setText(event.target.value)
  }

  const [text, setText] = useState("")
  const [final, setFinal] = useState(text)
  return(
    <>
    <div className="mb-3">
      <textarea className="form-control" value={text} id="text-box" rows="8" onChange={handleOnChange}></textarea>
      <p>{final}</p>
    </div>
    <button className="btn btn-primary" onClick={handleTextChange} >Add Text</button>
    </>
  );
}