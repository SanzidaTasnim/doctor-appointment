import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HeaderBottomInfo.css';

const HeaderBottomInfo = ({ info }) => {
  const { icon, color, heading, description } = info;
  return (
    <div className={`main row align-items-center bg-${color} m-2 `}>
      <div className="col-md-2">
        <FontAwesomeIcon className='icon' icon={icon} />
      </div>
      <div className="content col-md-10">
        <h5>{heading}</h5>
        <small>{description}</small>
      </div>
    </div>
  );
};

export default HeaderBottomInfo;
