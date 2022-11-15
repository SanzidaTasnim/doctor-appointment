import React from 'react';
import ServicesItem from '../ServicesItem/ServicesItem';
import cavity from './../../../images/cavity.png';
import fluoride from './../../../images/fluoride.png';
import whitening from './../../../images/whitening.png';
import './Services.css';

const Services = () => {
   const servicesInfo = [
      {  
         id: 1,
         source: fluoride,
         title: 'Fluoride Treatment',
         description: 'Lorem ipsum is a dummy printing and typesetting indust ipsum has been the.'
      },
      {  
         id: 2,
         source: cavity,
         title: 'Cavity Filling',
         description: 'Lorem ipsum is a dummy printing and typesetting indust ipsum has been the.'
      },
      {  
         id: 3,
         source: whitening,
         title: 'Teeth Whitening',
         description: 'Lorem ipsum is a dummy printing and typesetting indust ipsum has been the.'
      }
   ];
   return (
      <div>
         <h5 style={{color: '#1CC7C1',textAlign: 'center',fontWeight: 'bold'}}>OUR SERVICES</h5>
         <h2 style={{textAlign: 'center',marginBottom: '80px',fontWeight: 'bold',fontSize: '35px'}}>Services We Provide</h2>

         <div className="row container m-auto" style={{textAlign: 'center'}}>
            {
               servicesInfo.map(info => <ServicesItem key={info.id} info={info}/>)
            }
         </div>
      </div>
   );
};

export default Services;