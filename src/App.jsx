import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Facilities from "./pages/facilities";
import Gallery from "./pages/gallery";
import Career from "./pages/contact";
import Faculty from "./pages/faculty";
import Staff from "./pages/staff";
import Research from "./pages/research";
import "./pages/style.css";
import img from "./pages/img/iitism.png";
import img2 from "./pages/img/PHOTO-2025-03-20-18-04-21.jpg";
import Navbar from "./Navbar";
import Student from "./pages/student";
import Footer from "./pages/footer";
import ActivitiesPage from "./pages/activities";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center w-full bg-white py-4">
          {/* Left Logo */}
          <img
            src={img}
            alt="logo"
            className="w-50 h-50 object-contain ml-4"
            style={{ filter: "brightness(1)" }} // Adjust the brightness value as needed
          />

          {/* Center Header Text */}
          <div className="text-center">
              <div className="text-6xl font-bold text-[#5d0208]">
              REGIONAL CENTRE FOR GEODESY
            </div>
            <div className="text-2xl">IIT (ISM) Dhanbad</div>
          </div>

          {/* Right Logo */}
          <img
            src={img2}
            alt="logo"
            className="w-50 h-50 object-contain mr-4"
            style={{ filter: "brightness(1)" }} // Adjust the brightness value as needed
          />
        </div>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Career />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/research" element={<Research />} />
          <Route path="/student" element={<Student />} />
          <Route path="/activity" element={<ActivitiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
