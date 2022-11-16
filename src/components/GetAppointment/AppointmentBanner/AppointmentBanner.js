import React from 'react';
import AppointCalendar from '../AppointCalendar/AppointCalendar';
import chair from './../../../images/chair.png';
import './AppointmentBanner.css';

const AppointmentBanner = ({date,setDate}) => {
   
   return (
      <div className="row d-flex main-content">
      <div className="main-left col-md-5">
        <h1 className="appoint-heading">Appointment</h1>
        <AppointCalendar date={date} setDate={setDate} />
      </div>
      <div className="main-right col-md-7 d-flex justify-content-center">
        <img src={chair} alt="Chair" style={{ width: "80%" }} />
      </div>
    </div>
   );
};

export default AppointmentBanner;