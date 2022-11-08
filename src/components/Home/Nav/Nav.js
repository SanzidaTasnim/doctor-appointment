import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
               <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                  <li className="nav-item">
                     <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                  </li> 
                  <li className="nav-item">
                     <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="">Dental Services</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link text-light" to="">Reviews</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link text-light" to="">Blog</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link text-light" to="">Contact Us</Link>
                  </li>  
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default Nav;