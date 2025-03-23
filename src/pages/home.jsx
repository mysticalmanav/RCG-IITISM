import React, { useEffect, useState } from "react";
import "./style.css"; // Tailwind CSS is included here
import sanityClient from "@sanity/client";

// Configure Sanity client
const client = sanityClient({
  projectId: "15js759w", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
});

function App() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    // Fetch news, events, and carousel images from Sanity
    const fetchData = async () => {
      // Fetch news and events
      const newsEventsQuery = `*[_type == "news" || _type == "events"] | order(date desc) {
        _type,
        _id,
        title,
        description,
        date,
        location,
        link
      }`;
      const newsEventsData = await client.fetch(newsEventsQuery);

      // Separate news and events
      const newsData = newsEventsData.filter((item) => item._type === "news");
      const eventsData = newsEventsData.filter(
        (item) => item._type === "events"
      );

      setNews(newsData);
      setEvents(eventsData);

      // Fetch carousel images
      const carouselQuery = `*[_type == "carousel"] {
        _id,
        image {
          asset->{
            url,
            altText
          }
        },
        altText,
        caption
      }`;
      const carouselData = await client.fetch(carouselQuery);
      setCarouselImages(carouselData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <main className="flex-grow">
        {/* Carousel Section */}
        <div className="carousel-wrapper">
          {carouselImages.length > 0 ? (
            carouselImages.map((image) => (
              <div key={image._id} className="carousel-item">
                <img
                  src={image.image.asset.url}
                  alt={image.altText || image.caption || "Carousel Image"}
                  className="w-full"
                />
                {image.caption && (
                  <div className="carousel-caption">
                    <p>{image.caption}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="carousel-item">
              <img
                src="img/placeholder.png" // Fallback image
                alt="Placeholder"
                className="w-full"
              />
            </div>
          )}
        </div>

        {/* Widgets Section */}
        <div className="widgets-wrapper bg-red-700 text-white py-8">
          <div className="container mx-auto">
            <div className="alert text-center mb-8">
              Regional Centre for Geodesy (RCG) at IIT (ISM) DHANBAD is
              committed to producing high quality technical manpower, R&D
              activities, and to act as a resource center for Geodesy
            </div>

            <div className="flex justify-between">
              {/* News Section */}
              <div className="w-1/3" id="news">
                <div className="news-content">
                  <h2 className="text-xl font-bold mb-4">News</h2>
                  <ul id="news-list">
                    {news.length > 0 ? (
                      news.map((item) => (
                        <li key={item._id} className="mb-4">
                          <h3 className="font-semibold">{item.title}</h3>
                          <p>{item.description}</p>
                          <p className="text-sm text-gray-300">
                            {new Date(item.date).toLocaleDateString()}
                          </p>
                          {item.link && (
                            <a
                              href={item.link}
                              className="text-blue-300 hover:underline"
                            >
                              Read more
                            </a>
                          )}
                        </li>
                      ))
                    ) : (
                      <li>Coming Soon!</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Events Section */}
              <div className="w-1/3" id="events">
                <div className="events-content">
                  <h2 className="text-xl font-bold mb-4">Events</h2>
                  <ul id="events-list">
                    {events.length > 0 ? (
                      events.map((item) => (
                        <li key={item._id} className="mb-4">
                          <div className="event-container flex items-center">
                            <div className="date text-center border-r-2 border-yellow-500 pr-4">
                              <span className="block border-2 border-yellow-500 rounded-full p-4">
                                <div className="day">
                                  {new Date(item.date).toLocaleString(
                                    "default",
                                    {
                                      month: "short",
                                    }
                                  )}
                                </div>
                                <div className="month">
                                  {new Date(item.date).getFullYear()}
                                </div>
                              </span>
                            </div>
                            <div className="event-text ml-4">
                              <h3 className="font-semibold">{item.title}</h3>
                              <p>{item.description}</p>
                              {item.location && (
                                <p className="text-sm text-gray-300">
                                  Location: {item.location}
                                </p>
                              )}
                              {item.link && (
                                <a
                                  href={item.link}
                                  className="text-blue-300 hover:underline"
                                >
                                  More details
                                </a>
                              )}
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li>Coming Soon!</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
