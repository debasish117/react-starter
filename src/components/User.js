import React from 'react' ;

export default function User(props){
  return(
    <div>
      <p>My name is {props.name}</p>
      <p>my id is {props.id}</p>
      <p>my bloodgroup is {props.blood}</p>
    </div>
  )
}