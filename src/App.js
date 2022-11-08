import "./App.css";
import Home from "./components/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
