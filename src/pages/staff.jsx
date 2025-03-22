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
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    // Fetch staff data from Sanity
    const fetchStaff = async () => {
      const query = `*[_type == "staff"] {
        _id,
        name,
        image {
          asset->{
            url,
            altText
          }
        },
        designation,
        email
      }`;
      const data = await client.fetch(query);
      setStaffMembers(data);
    };

    fetchStaff();
  }, []);

  return (
    <div className="wrapper">
      {/* Main Content */}
      <main className="contents-wrapper">
        <div className="content staff-members">
          <h1>Staff Members</h1>
          <ul className="list-group">
            {staffMembers.map((staff) => (
              <li key={staff._id} className="list-group-item">
                <h3>{staff.name}</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <img
                      src={staff.image.asset.url}
                      height="140"
                      alt={staff.image.asset.altText || staff.name}
                    />
                  </div>
                  <div className="col-sm-8">
                    <b>{staff.designation}</b>
                    {staff.email && (
                      <>
                        <br />
                        Contact: <b>{staff.email}</b>
                      </>
                    )}
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
