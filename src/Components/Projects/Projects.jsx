import React from "react";
import ProjectCard from "./ProjectCard";

// image import
import Kerala from '../../assets/kerala.png'
import Food from '../../assets/Food.png'
import TicTacToe from '../../assets/tictactoe.png'
import RestProject from '../../assets/RestaurantProject.png'
import CamerinKids from '../../assets/CamerinKids.png'
import WeatherDetails from '../../assets/WeatherDetails.png'
import CountryDetails from '../../assets/CountryDetails.png'
import Calculator from '../../assets/Calculator.png'
import Nike from '../../assets/Nike.png'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold lg:ml-8">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Nike"
          main="The Nike website showcases innovative sportswear and accessories, built using HTML, Tailwind CSS, and React for a dynamic, responsive design, ensuring a seamless and interactive user experience across devices."
          demo="https://nike-react-project-five.vercel.app/"
          code="https://github.com/Arunps21/nike-react-project"
          image={Nike}
        />
        <ProjectCard
          title="Kerala Tourism"
          main="The Kerala Tourism project showcases the natural beauty and cultural heritage of Kerala, built using HTML, CSS, Bootstrap, React, and JavaScript to create a visually appealing and responsive user experience."
          demo="https://tourism-project-eta.vercel.app/"
          code="https://github.com/Arunps21/tourism-project"
          image={Kerala}
        />
        <ProjectCard
          title="Food Recipe"
          main="This Food Recipe project is built using HTML, CSS, Bootstrap, React, and JavaScript. It offers a dynamic user interface for browsing, searching, and viewing recipes with responsive design and smooth navigation."
          demo="https://food-recipes-orpin.vercel.app/"
          code="https://github.com/Arunps21/food-recipes"
          image={Food}
        />
        <ProjectCard
          title="Tic Tac Toe"
          main="The Tic Tac Toe game is built using HTML, CSS, React, and JavaScript, offering an interactive, user-friendly interface where players can enjoy the classic game with smooth gameplay and responsive design."
          demo="https://tic-tac-toe-taupe-delta.vercel.app/"
          code="https://github.com/Arunps21/tic-tac-toe"
          image={TicTacToe}
        />
        <ProjectCard
          title="Restaurant Project"
          main="This restaurant project is built using HTML, CSS, and Bootstrap, featuring a responsive layout for displaying menus, reservations, and services. It emphasizes elegant design and smooth user experience."
          demo="https://arunps21.github.io/restaurant-project/"
          code="https://github.com/Arunps21/restaurant-project"
          image={RestProject}
        />
        <ProjectCard
          title="Camerin Kids"
          main="The Camerin Kids project is a dynamic website built using HTML, CSS, and JavaScript, designed to provide an interactive and engaging experience for children, focusing on fun and educational content."
          demo="https://arunps21.github.io/camerin-kids/"
          code="https://github.com/Arunps21/camerin-kids"
          image={CamerinKids}
        />
        <ProjectCard
          title="Weather Details"
          main="The Weather Details project is a web application built using HTML, CSS, JavaScript, and a weather API. It fetches real-time weather data for a specific location, displaying temperature, humidity, and conditions."
          demo="https://arunps21.github.io/weather-details/"
          code="https://github.com/Arunps21/weather-details"
          image={WeatherDetails}
        />
        <ProjectCard
          title="Country Details"
          main="The Country Details project, built using HTML, CSS, JavaScript, and a REST API, fetches and displays information about countries, including population, area, capital, and more, providing an interactive user experience."
          demo="https://arunps21.github.io/country-details/"
          code="https://github.com/Arunps21/country-details/tree/master"
          image={CountryDetails}
        />
        <ProjectCard
          title="Calculator Project"
          main="The Country Details project, built using HTML, CSS, JavaScript, and a REST API, fetches and displays information about countries, including population, area, capital, and more, providing an interactive user experience."
          demo="https://arunps21.github.io/calculator-project/"
          code="https://github.com/Arunps21/calculator-project"
          image={Calculator}
        />
      </div>
    </div>
  );
};

export default Projects;
