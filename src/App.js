import "./App.css";
import Home from "./components/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import GetAppointment from "./components/GetAppointment/GetAppointment/GetAppointment";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/appointment' element={<GetAppointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
