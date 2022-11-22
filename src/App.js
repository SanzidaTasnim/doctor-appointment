import { createContext, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import GetAppointment from "./components/GetAppointment/GetAppointment/GetAppointment";
import Home from "./components/Home/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Services from "./components/Service/Service";

export const createUser = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <createUser.Provider value={[loggedInUser , setLoggedInUser]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/appointment' element={<GetAppointment />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </createUser.Provider>
  );
}

export default App;
