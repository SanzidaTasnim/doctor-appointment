import React from 'react';
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
   return (
      <div className='header-bg'>
         <Nav />
         <Main />
      </div>
   );
};

export default Header;