import React from "react";
import chair from "./../../../images/chair.png";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="row d-flex main-content">
      <div className="main-left col-md-5">
        <h1 className="main-heading">Your New Smile Starts Here</h1>
        <p className="main-para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi
          ex consectetur possimus dolor debitis est. Reiciendis eaque unde hic
          fuga porro tempora? Quam, necessitatibus?
        </p>
        <button>
         <Link to='/appointment' className='btn btn-primary main-btn'>Get Appointment</Link>
        </button>
      </div>
      <div className="main-right col-md-7 d-flex justify-content-center">
        <img src={chair} alt="Chair" style={{ width: "80%" }} />
      </div>
    </div>
  );
};

export default Main;
