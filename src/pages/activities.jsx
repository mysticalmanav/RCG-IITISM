import React from "react";

// Import images for activities
import studentTrainingImg from "./img/5.png";
import researchDevelopmentImg from "./img/2.png";
import corsImg from "./img/2.png";

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Activities
        </h1>

        {/* Activity 1: Student Training */}
        <div className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Student Training
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={studentTrainingImg}
              alt="Student Training"
              className="w-full md:w-48 h-48 object-cover rounded-lg"
            />
            <p className="text-gray-700">
              A short course called{" "}
              <b>"GNSS Surveying: Basic Theory and Practice"</b> was held at the
              Sardar Patel College of Engineering in Mumbai. A total of{" "}
              <b>60 participants</b> attended the course, including
              professionals from the civil engineering field.
            </p>
          </div>
        </div>

        {/* Activity 2: Research & Development */}
        <div className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Research & Development
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={researchDevelopmentImg}
              alt="Research & Development"
              className="w-full md:w-48 h-48 object-cover rounded-lg"
            />
            <p className="text-gray-700">
              Development of a <b>Low-Cost GNSS Station</b> for environmental
              monitoring. This project aims to provide affordable and accurate
              GNSS solutions for monitoring environmental changes.
            </p>
          </div>
        </div>

        {/* Activity 3: CORS */}
        <div className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">CORS</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={corsImg}
              alt="CORS Installation"
              className="w-full md:w-48 h-48 object-cover rounded-lg"
            />
            <p className="text-gray-700">
              <b>Continuously Operating Reference Station (CORS)</b>{" "}
              installation completed. This station will provide high-precision
              GNSS data for various applications, including surveying and
              geospatial research.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivitiesPage;
