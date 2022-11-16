import React from "react";
import "./AvailableAppointments.css";

const AvailableAppointments = ({ date }) => {
  return (
    <div className="text-center available-main">
      <h2>Available Appointments on {date.toDateString()}</h2>
      <div className="row container m-auto text-center">
        <div className="col-md-4">
          <div className="available-item">
            <h4>Teeth Orthodontics</h4>
            <h5>8:00 AM - 9:00AM</h5>
            <small>10 SPACES AVAILABLE</small>
            <p>
              <button className="btn btn-primary">BOOK APPOINTMENT</button>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="available-item">
            <h4>Cosmetic Dentistry</h4>
            <h5>10:05 AM - 11:30AM</h5>
            <small>10 SPACES AVAILABLE</small>
            <p>
              <button className="btn btn-primary">BOOK APPOINTMENT</button>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="available-item">
            <h4>Teeth Cleaning</h4>
            <h5>5:00 PM - 6:30AM</h5>
            <small>10 SPACES AVAILABLE</small>
            <p>
              <button className="btn btn-primary">BOOK APPOINTMENT</button>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="available-item avail-margin">
            <h4>Cavity Protection</h4>
            <h5>8:00 AM - 9:00AM</h5>
            <small>10 SPACES AVAILABLE</small>
            <p>
              <button className="btn btn-primary">BOOK APPOINTMENT</button>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="available-item avail-margin">
            <h4>Teeth Orthodontics</h4>
            <h5>10:05 AM - 11:30AM</h5>
            <small>10 SPACES AVAILABLE</small>
            <p>
              <button className="btn btn-primary">BOOK APPOINTMENT</button>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="available-item avail-margin">
            <h4>Teeth Cleaning</h4>
            <h5>8:00 PM - 9:30AM</h5>
            <small>10 SPACES AVAILABLE</small>
            <p>
              <button className="btn btn-primary">BOOK APPOINTMENT</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointments;
