import React from 'react';
import './DoctorItem.css';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorItem = ({info}) => {
   const {name , source , phone} = info;
   return (
      <div className='col-md-4 doctor-item'>
         <img src={source} alt="Doctor" style={{width: '100%'}} />
         <h4>{name}</h4>
         <small> <FontAwesomeIcon icon={ faPhoneAlt } style={{color: '#1CC7C1'}}/> {phone} </small>
      </div>
   );
};

export default DoctorItem;