import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Doctor from '../Doctor/Doctor';
import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Header from '../Header/Header';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
   return (
      <div>
         <Header />
         <HeaderBottom />
         <Services />
         <ExceptionalCare />
         <Appointment />
         <Testimonial />
         <Blog />
         <Doctor />
         <Form />
         <Footer />
      </div>
   );
};

export default Home;