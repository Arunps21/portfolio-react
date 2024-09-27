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
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
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
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={CamerinFOlks} alt="" style={{ height: "100px" }} />
            <span className="text-white">
              <h2 className="leading-tight">Camerin Folks, Kakkanad</h2>
              <p className="text-sm leading-tight font-thin">
                June 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Enrolled in a comprehensive MERN Stack Web Development
                  internship program
                </li>
                <li>
                  - I gained hands-on experience with Mongo DB, Express Js,
                  React, and Node.js
                </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img src={Cellar} alt="" style={{ height: "100px" }} />
            <span className="text-white">
              <h2 className="leading-tight">
                Cellar Innovative Developers, Aluva
              </h2>
              <p className="text-sm leading-tight font-thin">
                January 2024 - April 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Enrolled in an immersive React Web Development internship</li>
                <li>- I gained hands-on experience in developing web applications using React.js</li>
                <li>- I worked on building reusable components, managing state with React hooks, and integrating APIs for dynamic content</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
