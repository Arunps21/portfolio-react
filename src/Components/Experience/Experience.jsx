import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGit,
} from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
import CamerinFOlks from "../../assets/Camerin_folks-removebg.png";
import Cellar from "../../assets/Cid.png";

const Experience = () => {
  return (
    <div id="Experience" className="p-4 md:p-12">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">
        Experience
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-around gap-8">
        {/* Icons Section */}
        <div className="flex flex-wrap w-full md:w-2/5 gap-4 md:gap-8 py-6 md:p-8">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#7952B3" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGit color="#F05032" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="#FFFFFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span> */}
        </div>

        {/* Experience Section */}
        <div className="w-full md:w-3/5">
          <div className="flex flex-col md:flex-row gap-4 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <img src={CamerinFOlks} alt="Camerin Folks" className="h-24 w-24 object-contain" />
            <div className="text-white text-center md:text-left">
              <h2 className="leading-tight">Camerin Folks, Kakkanad</h2>
              <p className="text-sm leading-tight font-thin">June 2024 - Present</p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>
                  Enrolled in a comprehensive MERN Stack Web Development internship program
                </li>
                <li>
                  Gained hands-on experience with MongoDB, Express.js, React, and Node.js
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={Cellar} alt="Cellar Developers" className="h-24 w-24 object-contain" />
            <div className="text-white text-center md:text-left">
              <h2 className="leading-tight">
                Cellar Innovative Developers, Aluva
              </h2>
              <p className="text-sm leading-tight font-thin">January 2024 - April 2024</p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Enrolled in an immersive React Web Development internship</li>
                <li>Gained hands-on experience in developing web applications using React.js</li>
                <li>Built reusable components, managed state with React hooks, and integrated APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
