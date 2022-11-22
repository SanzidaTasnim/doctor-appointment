import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../../../App';
import {useNavigate, useLocation} from 'react-router';
import './Nav.css';

const Nav = ({textLight }) => {
   const [loggedInUser , setLoggedInUser] = useContext(createUser);
   const navColor = textLight ? 'text-light' : 'text-muted';
   const navigate = useNavigate();
   const location = useLocation();
   const handleLogin = () => {
      navigate('/dashboard');
      location.state?.from && navigate(location.state.from);
   }
   
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
                     {
                        loggedInUser.email ? <button onClick={() => setLoggedInUser({})} className='btn btn-secondary'>LogOut</button> : <button onClick={handleLogin} className='btn btn-secondary'>Login</button>
                     }
                  </li> 
                  
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default Nav;