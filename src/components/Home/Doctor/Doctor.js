import React from 'react';
import doctor from './../../../images/doctor.png';
import DoctorItem from './../DoctorItem/DoctorItem';
import './Doctor.css';

const Doctor = () => {
   const doctorInfo = [
      {
         id: 1,
         source: doctor,
         name: 'Dr. Rashed Hasan',
         phone: '+17 868 768 900',
      },
      {
         id: 2,
         source: doctor,
         name: 'Dr. Kamrul Kaisar',
         phone: '+13 647 890 005',
      },
      {
         id: 3,
         source: doctor,
         name: 'Dr. Gauhar Khan',
         phone: '+18 763 546 999',
      }
   ]
   return (
      <div className='doctor-main'>
         <h3>Our Doctors</h3>
         <div className="row container m-auto">
            {
               doctorInfo.map(info => <DoctorItem key={info.id} info={info} />)
            }
         </div>
      </div>
   );
};

export default Doctor;