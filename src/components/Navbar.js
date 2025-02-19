import React from "react";
import PropTypes from "prop-types"

export default function Navbar(props){
  let product = props.loggedInUser === "debasish" ? "Sugar" : "Nykaa"
  let b = props.age >= "18" ? "Menu" : "Home"
  
  // let textColor ;
  // if(props.color =="dark"){
  //   textColor = "light"
  // }
  // else{
  //   textColor = "dark"
  // }
 

  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.color}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{product}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{b}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.color==='light'?'dark':'light'} mx-3`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Light Mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  loggedInUser: PropTypes.string,
  age: PropTypes.number

} 