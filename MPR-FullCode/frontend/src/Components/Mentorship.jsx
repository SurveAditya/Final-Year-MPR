import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import mentor1 from "./images/mentor1.jpg";
import mentor2 from "./images/mentor2.png";
import mentor3 from "./images/mentor3.jpg";
import mentor4 from "./images/mentor4.jpg";
import mentor5 from "./images/mentor5.jpg";
import mentor6 from "./images/mentor3.jpg";
import "./Mentorship.css";

function Mentorship() {
  const mentors = [
    {
      id: 1,
      name: "Mrunmayi parker",
      expertise: "Web Developer",
      description: "Passionate about creating responsive and user-friendly websites.",
      email: "mentor1@example.com",
      photo: mentor1,
      calendlyLink: "https://calendly.com/mrunmayirparker/30min?back=1&month=2024-01",
    },
    {
      id: 2,
      name: "Nahush Patil",
      expertise: "Data Science",
      description: "Enthusiastic about data analysis and machine learning applications.",
      email: "mentor2@example.com",
      photo: mentor2,
      calendlyLink: "https://calendly.com/patilnahush42/30min",
    },
    {
      id: 3,
      name: "Priyal Jain",
      expertise: "UX Design",
      description: "Dedicated to crafting intuitive and visually appealing user experiences.",
      email: "mentor3@example.com",
      photo: mentor3,
      calendlyLink: "https://calendly.com/priyaljjn/30min",
    },
    {
      id: 4,
      name: "Aditya Surve",
      expertise: "Data Analytics",
      description: "Experienced in data analysis and deriving meaningful insights.",
      email: "mentor6@example.com",
      photo: mentor4, // You can replace it with another image
      calendlyLink: "https://calendly.com/charlie-analytics/30min",
    },
  ];
    // Add more mentors as needed
  
  const handleSendEmail = (email) => {
    const emailLink = `mailto:${email}?subject=Meeting%20Request&body=Dear%20mentor,%0D%0A%0D%0AI would like to schedule a meeting with you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]`;
    window.location.href = emailLink;
  };

  const handleScheduleMeet = (mentor) => {
    const calendlyLink = mentor.calendlyLink;
    window.open(calendlyLink, "_blank");
  };

  const handleMeet = () => {
    const meetNewLink = "https://meet.new";
    window.open(meetNewLink, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col items-center h-[76vh] bg-gray-100">
        <div className="flex flex-wrap justify-center items-center">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className={`mentor-card p-4 m-4 border border-gray-300 rounded-md custom-theme shadow-md transition duration-300 hover:shadow-lg ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'
              } w-72 h-80 flex flex-col justify-between`} // Adjusted the width and height, and added flex styles
              role="group"
              aria-labelledby={`mentor-${mentor.id}`}
            >
              <img
                src={mentor.photo}
                alt={`${mentor.name}'s photo`}
                className="w-20 h-20 rounded-full mb-2"
              />
              <div>
                <p id={`mentor-${mentor.id}`} className="text-lg font-semibold">
                  {mentor.name}
                </p>
                <p className="text-sm text-gray-600 mb-2">{mentor.expertise}</p>
                <p className="text-sm">{mentor.description}</p>
              </div>
              <div className="flex mt-2">
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded-md mr-2" // Changed button color to purple
                  onClick={() => handleSendEmail(mentor.email)}
                  aria-label={`Email ${mentor.name}`}
                >
                  Email
                </button>
                <button
                  className="bg-teal-500 text-white px-4 py-2 rounded-md mr-2" // Changed button color to teal
                  onClick={handleMeet}
                  aria-label={`Meet with ${mentor.name}`}
                >
                  Meet
                </button>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-md" // Changed button color to orange
                  onClick={() => handleScheduleMeet(mentor)}
                  aria-label={`Schedule a meeting with ${mentor.name}`}
                >
                  Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mentorship;