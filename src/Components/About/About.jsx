import React from "react";
import AboutImg from "../../assets/Arun_about-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img"/>

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  About Me
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Greetings! I'm Arun PS I am a recent graduate with a Master's
                  in Computer Applications (MCA) from MG University. Building on
                  a solid foundation established during my Bachelor of Computer
                  Applications (BCA), I have cultivated expertise in programming
                  languages such as C, C++, Java Script, Python and web
                  development frameworks like React.js and Node.js. Currently
                  seeking entry-level opportunities as a passionate web
                  developer, I am motivated to apply my skills and enthusiasm to
                  make a meaningful impact. Let’s connect to explore how my
                  background and passion for technology can contribute to the
                  success of your organization.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
