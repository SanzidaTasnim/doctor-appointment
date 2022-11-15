import React from 'react';
import treatment from './../../../images/treatment.png';
import './ExceptionalCare.css';

const ExceptionalCare = () => {
   return (
      <div className="row container m-auto">
         <div className="col-md-5 care-left">
            <img src={treatment} alt="Treatment" style={{width: '100%'}}/>
         </div>
         <div className="col-md-6 care-right" >
            <h2>Exceptional Dental Care,on Your Terms</h2>
            <p>It is a long established face that a render will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using 'Content here,content here',making it look like readable english.many desktop publishing packages and web page.</p>
            <button className='btn btn-primary'>Learn More</button>
         </div>
      </div>
   );
};

export default ExceptionalCare;