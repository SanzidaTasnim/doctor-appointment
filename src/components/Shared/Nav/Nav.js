import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({textLight}) => {
   const navColor = textLight ? 'text-light' : 'text-muted';
   return (
      <div>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
               <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                  <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                  </li> 
                  <li className="nav-item">
                     <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="">Dental Services</Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${navColor}`} to="">Blog</Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${navColor}`} to="">Contact Us</Link>
                  </li>  
                  <li className="nav-item">
                     <Link className={`nav-link ${navColor}`} to="/dashboard">Dashboard</Link>
                  </li> 
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default Nav;