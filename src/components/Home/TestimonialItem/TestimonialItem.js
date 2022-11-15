import React from 'react';
import './TestimonialItem.css';

const TestimonialItem = ({info}) => {
   const {name, country, description, source} = info;
   return (
      <div className="col-md-3 offset-1 test-describe">
         <p>{description}</p>
         <div className="row container m-auto">
            <div className="col-md-3">
               <img src={source} alt="Doctor-Small" style={{width:'100%'}}/>
            </div>
            <div className="col-md-9 test-bottom">
               <h5>{name}</h5>
               <small>{country}</small>
            </div>
         </div>
      </div>
   );
};

export default TestimonialItem;