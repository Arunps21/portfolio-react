import React from "react";
import ProjectCard from "./ProjectCard";

// image import
import Kerala from '../../assets/kerala.png'
import Food from '../../assets/Food.png'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Kerala Tourism"
          main="this is a bloggin website created in next js and used some component library used some component library"
          demo="https://tourism-project-eta.vercel.app/"
          code="https://github.com/Arunps21/tourism-project"
          image={Kerala}
        />
        <ProjectCard
          title="Food Recipe"
          main="this is a bloggin website created in next js and used some component library used some component library"
          demo="https://food-recipes-orpin.vercel.app/"
          code="https://github.com/Arunps21/food-recipes"
          image={Food}
        />
        {/* <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
