import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './AppointCalendar.css';

const AppointCalendar = ({date, setDate}) => {
  return (
    <div>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default AppointCalendar;
