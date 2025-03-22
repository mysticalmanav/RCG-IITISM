import React, { useState } from "react";
import "./style.css"; // Assuming you have a CSS file for styles
import img from './img/tools.png';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const softwareList = [
    'Leica Total Station (1") TS15I, R1000',
    "Micro station",
    "GNSS, GS16 Leica viva",
    "GYRO MAT - 3000",
    "ArcGIS Software",
    "ERDAS Imagine Software",
    "Digital Level DNA 03",
    "SARScape Software",
    "Auto Plotter",
    "Electronic Plotter AO Size",
    "Gamma Remote Sensing Suite",
    "Bernese GNSS Software",
    "Geomatica Total Ed. Suite Software",
    "Terrasolid",
    "3D Terrestrial Laser Scanner",
    "RiScan Pro",
    "Cyclone",
    "G-Wing FW UAV/Drone",
    "Simactive Correlator 3D UAV Software",
    "G-Station Mission Planning Software",
    "Intel Xeon Workstations & Servers",
    "IGIS Software",
    "DATAMINE STUDIO 3 Software",
    "Multipurpose 3D LIDAR",
  ];

  const totalPages = Math.ceil(softwareList.length / itemsPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next") {
        return prevPage < totalPages - 1 ? prevPage + 1 : prevPage;
      } else {
        return prevPage > 0 ? prevPage - 1 : prevPage;
      }
    });
  };

  const currentSoftwareList = softwareList.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="wrapper">
      <div className="carousel-wrapper mx-auto">
        <img
          height="500px"
          style={{ margin: "auto" }}
          src={img}
          alt="Faculty"
        />
      </div>

      <div className="contents-wrapper">
        <div className="content">
          <div className="gallery gallery-design">
            <div className="title">
              <h1>Softwares</h1>
            </div>
            <div className="grid">
              <div className="grid-sizer"></div>
              {["s1.jpeg", "s2.jpeg", "s3.jpeg", "s4.jpeg"].map(
                (img, index) => (
                  <a
                    key={index}
                    className="element-item grid-item mix mockups"
                    href={`img/gallery/${img}`}
                  >
                    <img src={`img/gallery/${img}`} width="300" alt="" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="widgets-wrapper">
        <div className="widgets-container">
          <div className="col-sm-4" id="announcements">
            <div className="announcement-content">
              <div className="widgets-title">
                <h2>Instruments</h2>
              </div>
              <ul id="announcement-list">
                <li>Survey equipment</li>
                <li>GNSS Receivers and related instruments</li>
                <li>Gravimetry</li>
                <li>Instruments for imaging and ranging</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4" id="events"></div>

          <div className="col-sm-4" id="news">
            <div className="news-content">
              <div className="widgets-title">
                <h2>Softwares</h2>
              </div>
              <ul id="news-list">
                {currentSoftwareList.map((software, index) => (
                  <li key={index}>{software}</li>
                ))}
              </ul>
              <div id="news-list-pagination">
                <button
                  onClick={() => handlePageChange("prev")}
                                  disabled={currentPage === 0}
                            className="px-4"
                >
                  <i className="fa fa-chevron-left" aria-hidden="true"></i> Previous
                </button>
                <button
                  onClick={() => handlePageChange("next")}
                  disabled={currentPage === totalPages - 1}
                >
                  Next <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default App;