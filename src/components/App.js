import './App.css';
import Aboutus from './components/Aboutus.js';
import Alerts from './components/Alerts.js';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import React,{useState} from 'react';

function App(){
  
  const toggle =()=>{
    if(mode=="dark"){
      setMode("light")
      document.body.style.background = 'black'
    }
    else{
      setMode("dark")
      document.body.style.background = 'white'
    }
  }
  const[mode , setMode]=useState("dark")
  return(
  <>
        <Navbar title="Sugar" loggedInUser="rony" age={18} color={mode} toggleMode={toggle}/>
        <Alerts alert="this is  alert"/>
      <div className="container"  >
       <Textform heading = "Enter the text " color={mode}  />
      </div>

      {/* <div className="container">
      <Aboutus />
      </div> */}
   </> 
  );}
          export default App;













     













// const users = [{name: 'sony', age:'22'},{name: 'rony', age:'25'},{name: 'kanha', age:'26'}]
// const employee = {
//   id : 333 ,
//   name : 'radha',
//   bloodGroup : 'O'
// }
/* {users.map((user)=>{
       return <User name={user.name} age={user.age}/>
      })} */
      /* <User id = {employee.id} name={employee.name} blood={employee.bloodGroup}/> */

  // <div className="container" >
        // <Counter />
  //     </div>

  //   <div className="container">
  //     <Todolist />
  //   </div> 
  // <Colorchange />
  //     <CharCount />
     
     
      
      

      