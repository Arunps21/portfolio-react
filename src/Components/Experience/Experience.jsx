import React from "react";
import CamerinFOlks from "../../assets/Camerin_folks-removebg.png";

const Experience = () => {
  const experiences = [
    {
      company: "Camerin Folks, Kakkanad",
      duration: "June 2024 - Present",
      description: [
        "Gaining hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js.",
        "Developing responsive and interactive user interfaces using React.js, ensuring a seamless user experience.",
        "Learning to design and manage RESTful APIs with Express.js, facilitating efficient client-server communication.",
        "Exploring database integration with MongoDB, focusing on efficient data storage and retrieval practices.",
      ],
    },
  ];

  return (
    <div id="Experience" className="p-4 md:p-12 md:ml-10">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">
        Experience
      </h1>
      <div className="flex flex-col gap-y-8 w-full md:w-3/4 items-center p-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center"
          >
            <img
              src={CamerinFOlks}
              alt={`${exp.company} logo`}
              className="h-24 w-24 object-contain"
            />
            <div className="text-white text-center md:text-left">
              <h2 className="leading-tight">{exp.company}</h2>
              <p className="text-sm leading-tight font-thin">{exp.duration}</p>
              <ul className="text-sm p-2 list-disc list-inside text-justify">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
