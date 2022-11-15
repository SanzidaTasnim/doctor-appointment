import React from "react";
import doctor from "./../../../images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="row appointment">
      <div className="col-md-5 appointment-img">
         <img src={doctor} alt="" style={{width: '100%'}} />
      </div>
      <div className="col-md-7 appointment-content">
        <h3>APPOINTMENT</h3>
        <h2>Make an appointment Today</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default Appointment;
