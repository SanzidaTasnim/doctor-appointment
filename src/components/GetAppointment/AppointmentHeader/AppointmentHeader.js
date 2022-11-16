import React from 'react';
import Nav from '../../Shared/Nav/Nav';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import './AppointmentHeader.css';

const AppointmentHeader = ({date, setDate}) => {
   return (
      <div className='getAppointment-bg'>
         <Nav textLight={false}/>
         <AppointmentBanner date={date} setDate={setDate}/>
      </div>
   );
};

export default AppointmentHeader;