import { React, useState, useEffect } from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';





const NavBar = () => {

  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect (() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);

  }, []);


  return (
    <div className={`Nav ${show && 'Nav-Black'}`}>
      <div className="Nav-Content">
      <Link to='/'>
        <img className="Nav-Logo"
        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' 
        alt="" />

      </Link>
      <Link to='/profile'>
        <img
        className="Nav-Avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
        alt=""/>
      </Link>
      
      </div>
    </div>
  )
}

export default NavBar