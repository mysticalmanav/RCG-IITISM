import React, { useEffect, useState } from "react";
import "./style.css"; // Assuming you have a CSS file for custom styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import sanityClient from "@sanity/client";

// Configure Sanity client
const client = sanityClient({
  projectId: "15js759w", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
});

const App = () => {
  const [researchData, setResearchData] = useState([]);

  useEffect(() => {
    // Fetch research data from Sanity
    const fetchResearch = async () => {
      const query = `*[_type == "research"] {
        _id,
        title,
        points
      }`;
      const data = await client.fetch(query);
      setResearchData(data);
    };

    fetchResearch();
  }, []);

  return (
    <div className="wrapper">
      {/* Main Content */}
      <main className="contents-wrapper">
        <div className="content">
          {researchData.map((research) => (
            <div key={research._id}>
              <h4>
                <b>{research.title || "Research"}</b>
              </h4>
              <ol id="geodetic-studies">
                {research.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
       
    </div>
  );
};

export default App;
