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
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from Sanity
    const fetchStudents = async () => {
      const query = `*[_type == "student"] {
        _id,
        name,
        qualification,
        department,
        degree,
        image {
          asset->{
            url,
            altText
          }
        }
      }`;
      const data = await client.fetch(query);
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="wrapper">
      {/* Main Content */}
      <main className="contents-wrapper">
        <div className="content students-list">
          <h1>Students</h1>
          <ul className="list-group">
            {students.map((student) => (
              <li key={student._id} className="list-group-item">
                <h3>{student.name}</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <img
                      src={student.image?.asset?.url || "img/placeholder.png"} // Fallback image if no image is provided
                      height="140"
                      alt={student.image?.asset?.altText || student.name}
                    />
                  </div>
                  <div className="col-sm-8">
                    <b>Qualification:</b> {student.qualification}
                    <br />
                    <b>Department:</b> {student.department}
                    <br />
                    <b>Degree:</b> {student.degree}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
