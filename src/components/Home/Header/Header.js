import React from 'react';
import Main from '../Main/Main';
import Nav from '../../Shared/Nav/Nav';
import './Header.css';

const Header = () => {
   return (
      <div className='header-bg'>
         <Nav textLight={true}/>
         <Main />
      </div>
   );
};

export default Header;