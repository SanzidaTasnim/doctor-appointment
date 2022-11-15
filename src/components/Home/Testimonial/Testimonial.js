import React from 'react';
import TestimonialItem from '../TestimonialItem/TestimonialItem';
import doctor1 from './../../../images/people-1.png';
import doctor2 from './../../../images/people-2.png';
import doctor3 from './../../../images/people-3.png';
import './Testimonial.css';

const Testimonial = () => {
   const testimonialInfo = [
      {
         id: 1,
         name: 'Winson Herry',
         country: 'California',
         source: doctor1,
         description: "It is a long established face that a render will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using 'Content here,content'."
      },
      {
         id: 2,
         name: 'Addison Grey',
         country: 'Texas',
         source: doctor2,
         description: "It is a long established face that a render will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using 'Content here,content'."
      },
      {
         id: 3,
         name: 'Thomas Henry',
         country: 'Florida',
         source: doctor3,
         description: "It is a long established face that a render will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using 'Content here,content'."
      },
   ]
   return (
      <div className="container testimonial-head">
         <h4>TESTIMONIAL</h4>
         <h2>What's Our Patients Say</h2>
         <div className="row m-auto test-main">
            {
               testimonialInfo.map(info => <TestimonialItem key={info.id} info={info}/>)
            }
         </div>
      </div>
   );
};

export default Testimonial;