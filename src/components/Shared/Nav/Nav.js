import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../../../App';
import './Nav.css';

const Nav = ({textLight }) => {
   const [loggedInUser , setLoggedInUser] = useContext(createUser);
   const navColor = textLight ? 'text-light' : 'text-muted';
   
   return (
      <div>
         <nav className={`navbar navbar-expand-lg`}>
            <div className="container-fluid">
               <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                  <li className="nav-item">
                     <Link className={`nav-link`} aria-current="page" to='/'>Home</Link>
                  </li> 
                  <li className="nav-item">
                     <Link className={`nav-link`} to="/about" >About</Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link  ${navColor}`}  to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${navColor}`} to="/dashboard">Dashboard</Link>
                  </li> 
                  <li className="nav-item">
                     <button onClick={() => setLoggedInUser({})}>
                        {
                           loggedInUser.email ? 'LogOut' : 'Login'
                        }
                     </button>
                  <p>{loggedInUser.email}</p>
                  </li> 
                  
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default Nav;