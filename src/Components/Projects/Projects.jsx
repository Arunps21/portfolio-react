import React from "react";
import ProjectCard from "./ProjectCard";

// image import
import Kerala from '../../assets/kerala.png'
import Food from '../../assets/Food.png'
import TicTacToe from '../../assets/tictactoe.png'
import RestProject from '../../assets/RestaurantProject.png'
import CamerinKids from '../../assets/CamerinKids.png'
import WeatherDetails from '../../assets/WeatherDetails.png'

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
        <ProjectCard
          title="Tic Tac Toe"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
          demo="https://tic-tac-toe-taupe-delta.vercel.app/"
          code="https://github.com/Arunps21/tic-tac-toe"
          image={TicTacToe}
        />
        <ProjectCard
          title="Restaurant Project"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
          demo="https://arunps21.github.io/restaurant-project/"
          code="https://github.com/Arunps21/restaurant-project"
          image={RestProject}
        />
        <ProjectCard
          title="Camerin Kids"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
          demo="https://arunps21.github.io/camerin-kids/"
          code="https://github.com/Arunps21/camerin-kids"
          image={CamerinKids}
        />
        <ProjectCard
          title="Weather Details"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
          demo="https://arunps21.github.io/weather-details/"
          code="https://github.com/Arunps21/weather-details"
          image={WeatherDetails}
        />
      </div>
    </div>
  );
};

export default Projects;
