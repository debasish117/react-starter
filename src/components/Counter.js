import React, {useState} from "react";

export default function Counter(){

const numberDecrease = () =>{ 
  console.log("the number will decrease")
  if( number != 0 ){ 
    setNumber(number-1)
  }}

const resetNumber = () =>{
  console.log("reset the number")
  setNumber(0)
}

const numberIncrease =()=>{
  console.log("number will Increase")
  setNumber(number + 1)
}

  const [number , setNumber] = useState(0)
  return(
    <>
    <div>
      <p>{number}</p>
    </div>

    <button className="btn btn-primary mx-1" onClick={numberDecrease}> 
      Decrease
    </button>

    <button className="btn btn-primary mx-1" onClick={resetNumber}> 
      Reset
    </button>

    <button className="btn btn-primary mx-1" onClick={numberIncrease} > 
      Increase
    </button>
    </>
    
  )
}