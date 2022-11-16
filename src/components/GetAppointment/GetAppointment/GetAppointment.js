import React from 'react';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';


const GetAppointment = () => {
   const [date, setDate] = useState(new Date());
   return (
      <div>
         <AppointmentHeader date={date} setDate={setDate} />
         <AvailableAppointments date={date}/>
         <Footer />
      </div>
   );
};

export default GetAppointment;