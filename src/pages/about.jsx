import React from 'react';
import './style.css'; // Assuming you have a CSS file for styles

function App() {
  return (
    <>
      <div className="wrapper">
    
        <div className="contents-wrapper">
          <div className="content">
            <h1>About us</h1>
            <p>
              <b>Motivation</b>
              <br />
              The RCG was initially conceived on account of limited education in Geodesy at the Regional level...
            </p>
            <p>
              <b>Vision</b>
              <br />
              To act as the hub of excellence in teaching and research in Geodesy at the Regional and interRegional level...
            </p>
            <p>
              <b>Objective</b>
              <br />
              Strengthen activities in the area of Geodesy Infrastructure, Education, Capacity Building, Research and Development...
              <ol>
                <li>
                  <b>Capacity Building</b>
                  <br />
                  Strengthening the existing PG programme in Geomatics being offered by the Institute...
                </li>
                <li>
                  <b>Research & Development</b>
                  <br />
                  To promote and undertake R&D and Industry sponsored projects on Geodetic Surveying...
                </li>
                <li>
                  <b>Outreach Activities</b>
                  <br />
                  To organize special lecture series, workshops, conferences on geodesy related theme...
                </li>
              </ol>
            </p>
          </div>
        </div>

      
      </div>
    </>
  );
}

export default App;