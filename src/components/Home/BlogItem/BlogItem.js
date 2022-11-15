import React from "react";
import "./BlogItem.css";
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogItem = ({ info }) => {
  const { name, source, date, title, description } = info;
  return (
    <div className="col-md-4 blog-sec">
      <div className='blog-inner'>
        <div className="row">
          <div className="col-md-4">
            <img src={source} alt="Doctor" style={{width: '100%'}} />
          </div>
          <div className="col-md-8 blog-head">
            <h4>{name}</h4>
            <small>{date}</small>
          </div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="blog-hover">
         <h5>{name}</h5>
         <p>{date}</p>
         <h4>Check at least a doctor in a year for your teeth.</h4>
         <FontAwesomeIcon icon={faAnglesRight} />
         <FontAwesomeIcon icon={faAnglesRight} />
      </div>
      </div>

      
    </div>
  );
};

export default BlogItem;
