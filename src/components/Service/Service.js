import React from 'react';
import ExceptionalCare from '../Home/ExceptionalCare/ExceptionalCare';
import Services from '../Home/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import './Service.css';

const Service = () => {
   return (
      <div>
         <Nav />
         <div className="service-margin">
            <Services/>
            <ExceptionalCare />
            <div className="service-footer">
               <Footer />
            </div>
         </div>
      </div>
   );
};

export default Service;