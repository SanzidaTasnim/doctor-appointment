import React from "react";
import "./ServicesItem.css";

const ServicesItem = ({ info }) => {
  const { source, title, description } = info;
  return (
    <div className="col-md-4">
      <div style={{marginBottom: '100px'}}>
        <img src={source} alt={title} />
        <h4 className='title'>{title}</h4>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
