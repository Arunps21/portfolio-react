import React from "react";
import avatarImg from "../../assets/Arun PS.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-2">
          Full-Stack Developer | MERN Stack (MongoDB, Express.js, React.js, Node.js)
        </p>
        {/* <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button> */}
        <a href="https://drive.google.com/file/d/1IMZSpvce0e77LYNN3YpEqQo7qAadU9cK/view?usp=sharing">
          <button className="mt-5 ms-1 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Download Resume
          </button>
        </a>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          className="w-56 h-56 md:w-80 md:h-80  rounded-full object-cover"
          src={avatarImg}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Home;
