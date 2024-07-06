import React,{useState} from "react";

export default function Textform(props){

  const handleupClick =() =>{
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const handlelowClick =() =>{
    let newtext=text.toLowerCase();
    setText(newtext)
  }
  const handleonchange =(event) =>{
    setText(event.target.value)
  }

  const [text, setText] = useState("");

  return(
    <> 
      <div className="container" style={{color:props.color === 'dark'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonchange} style={{background:props.color==='dark'?'grey':'black',
           color:props.color==='dark'?'black':'white'}}id="text-box" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupClick} >convert to uppercase </button>
        <button className="btn btn-primary mx-1" onClick={handlelowClick} >convert to lowercase </button>
      </div>
      <div className="container my-2" style={{color:props.color==='dark'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words And {text.length} character</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the Something in the Text box above to preview it here"}</p>
      </div>
    </>
  )
}