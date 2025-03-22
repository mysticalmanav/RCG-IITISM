import React, { useEffect, useState } from "react";
import "./style.css";
import sanityClient from "@sanity/client";
import iitismLogo from "./img/iitism.png";

// Configure Sanity client
const client = sanityClient({
  projectId: "15js759w", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
});

function App() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    // Fetch faculty data from Sanity
    const fetchFaculty = async () => {
      const query = `*[_type == "faculty"] {
        _id,
        name,
        image {
          asset->{
            url,
            altText
          }
        },
        qualification,
        institute,
        areasOfInterest,
        email,
        profileLink
      }`;
      const data = await client.fetch(query);
      setFaculty(data);
    };

    fetchFaculty();
  }, []);

  return (
    <div className="wrapper">
      <div className="contents-wrapper">
        <div className="content faculty-list">
          <h1>Faculty</h1>
          <br />
          <ul className="list-group">
            {faculty.map((member) => (
              <li key={member._id} className="list-group-item">
                <h3>
                  <a
                    href={member.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#337ab7" }}
                  >
                    {member.name}
                  </a>
                </h3>
                <div className="row">
                  <div className="col-sm-2 col-md-2 col-lg-2">
                    <img
                      src={member.image.asset.url}
                      height="140"
                      alt={member.image.asset.altText || member.name}
                    />
                  </div>
                  <div className="col-sm-10 col-md-10 col-lg-10">
                    {member.qualification}
                    <br />
                    {member.institute}
                    <br />
                    <b>Areas of Interest : </b>
                    {member.areasOfInterest}
                    <br />
                    Contact : <b>{member.email}</b>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    
    </div>
  );
}

export default App;
