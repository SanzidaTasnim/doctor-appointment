import React from 'react';
import './Blog.css';
import doctor1 from './../../../images/people-1.png';
import doctor2 from './../../../images/people-2.png';
import doctor3 from './../../../images/people-3.png';
import BlogItem from '../BlogItem/BlogItem';


const Blog = () => {
   const blogInfo = [
      { 
         id: 1,
         name: 'Dr. Rashed Kabir',
         source: doctor1,
         date: '25 April 2019',
         title: '2 times of brush in a day can keep you healthy',
         description: 'It is a long established fact that by the readable content of a lot layout.the point is to be noted very carefully.'
      },
      { 
         id: 2,
         name: 'Dr.Caudi',
         source: doctor2,
         date: '02 May 2019',
         title: '2 times of brush in a day can keep you healthy',
         description: 'It is a long established fact that by the readable content of a lot layout.the point is to be noted very carefully.'
      },
      { 
         id: 3,
         name: 'Dr.John Mitchel',
         source: doctor3,
         date: '23 April 2019',
         title: 'The tooth cancer is taking a challenge',
         description: 'It is a long established fact that by the readable content of a lot layout.the point is to be noted very carefully.'
      }
   ]
   return (
      <div className="blog-main">
         <h3 style={{textAlign: 'center',color: 'rgb(28, 199, 193)'}}>OUR BLOG</h3>
         <h1 style={{textAlign: 'center'}}>From Our Blog News</h1>
         <div className="row container m-auto">
            {
               blogInfo.map(info => <BlogItem info={info} key={info.id}/>)
            }
         </div>
      </div>
   );
};

export default Blog;