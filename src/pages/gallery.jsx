import React, { useEffect, useState } from "react";
import "./style.css"; // Assuming you have a CSS file for styles
import $ from "jquery";
import "magnific-popup"; // Ensure Magnific Popup is installed
import "./magnific-popup.css";
import imagesLoaded from "imagesloaded"; // Import imagesloaded library
import sanityClient from "@sanity/client";

// Configure Sanity client
const client = sanityClient({
  projectId: "15js759w", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
});

function App() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // Fetch gallery images from Sanity
    const fetchGalleryImages = async () => {
      const query = `*[_type == "gallery"] {
        _id,
        title,
        description,
        image {
          asset->{
            url,
            altText
          }
        }
      }`;
      const data = await client.fetch(query);
      console.log(data);
      setGalleryImages(data);
    };

    fetchGalleryImages();
  }, []);

  // Re-run effect when galleryImages change

  return (
    <div className="wrapper">
      <div className="contents-wrapper">
        <div className="content">
          <div className="gallery gallery-design p-5">
            <div className="title text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <a
                  key={image._id}
                  className="element-item grid-item mix mockups group relative block overflow-hidden rounded-lg shadow-lg transition-shadow duration-300"
                  href={image.image.asset.url}
                >
                  <img
                    src={image.image.asset.url}
                    alt={image.image.asset.altText || image.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0  transition-opacity duration-300 flex flex-col justify-end p-4">
                    {image.title && (
                      <p className="text-white text-lg font-semibold">
                        {image.title}
                      </p>
                    )}
                    {image.description && (
                      <p className="text-white text-sm">{image.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      
    </div>
  );
}

export default App;
