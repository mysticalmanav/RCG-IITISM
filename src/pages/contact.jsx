import React, { useEffect, useState } from "react";
import "./style.css"; // Assuming you have a CSS file for styles
import sanityClient from "@sanity/client";

// Configure Sanity client
const client = sanityClient({
  projectId: "15js759w", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
});

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contact data from Sanity
    const fetchContacts = async () => {
      const query = `*[_type == "contact"] {
        _id,
        name,
        role,
        image {
          asset->{
            url,
            altText
          }
        },
        address,
        email,
        phone
      }`;
      const data = await client.fetch(query);
      setContacts(data);
    };

    fetchContacts();
  }, []);

  return (
    <div className="wrapper">
      <div className="contents-wrapper">
        <div className="content faculty-list">
          <h1>Contact Us</h1>
          <br />
          <ul className="list-group">
            {contacts.map((contact) => (
              <li key={contact._id} className="list-group-item">
                <h3>
                  <a
                    href={`https://iitism.irins.org/profile/${contact._id}`} // Replace with actual profile link logic
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#337ab7" }}
                  >
                    {contact.name}
                  </a>
                </h3>
                <div className="row">
                  <div className="col-sm-2 col-md-2 col-lg-2">
                    <img
                      src={contact.image.asset.url}
                      height="140"
                      alt={contact.image.asset.altText || contact.name}
                    />
                  </div>
                  <div className="col-sm-10 col-md-10 col-lg-10">
                    <b>{contact.role}</b>
                    <br />
                    <strong>Address : </strong>
                    {contact.address}
                    <br />
                    Contact : <b>{contact.email}</b>
                    <br />
                    Phone: <b>{contact.phone}</b>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Google Map Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <div
              className="map-container"
              style={{
                overflow: "hidden",
                paddingBottom: "56.25%",
                position: "relative",
                height: 0,
              }}
            >
              <iframe
                title="Google Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1709.481428959544!2d86.44000313728107!3d23.814591386433303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd884cb5a20d%3A0x6e5b5d7e154caecf!2sDepartment%20of%20Mining%20Engineering%2C%20IIT%20(ISM)%20Dhanbad!5e0!3m2!1sen!2sin!4v1742579057532!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
