import React from "react";
import Crypto from "../assets/Crypto.png";
import Clickkart from "../assets/Clickn-Kart.png"
import Image_Search from "../assets/Image-Search.png";
import WeatherApp1 from "../assets/WeatherApp1.png";
import CodeEx from "../assets/CodeX2.png";
import Portfolio from "../assets/Portfolio.png"
import Textutils from "../assets/Textutils.png";
import Todo from "../assets/Todo.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Clickkart,
      demoLink: "https://clickn-kart.onrender.com//",
      codeLink: "https://github.com/aatishjadhav/ClicknCart",
    },
    {
      id: 2,
      image: Crypto,
      demoLink: "https://mycrypto-watcher.netlify.app/",
      codeLink: "https://github.com/aatishjadhav/Crypto-Watcher",
    },
    {
      id: 3,
      image: WeatherApp1,
      demoLink: "https://weather-info-real.netlify.app/",
      codeLink: "https://github.com/aatishjadhav/Weather-App-React",
    },
    {
      id: 4,
      image: Image_Search,
      demoLink: "https://imagehunt.netlify.app/",
      codeLink: "https://github.com/aatishjadhav/Unsplash-Image-Search-App",
    },
    {
      id: 5,
      image: CodeEx,
      demoLink: "code-ex.netlify.app",
      codeLink: "https://github.com/aatishjadhav/CodeEx",
    },
    {
      id: 6,
      image: Portfolio,
      demoLink: "https://atishh-portfolio.netlify.app/",
      codeLink: "https://github.com/aatishjadhav/Crypto-Watcher",
    },

    {
      id: 7,
      image: Textutils,
      demoLink: "react-mytextutils.netlify.app/",
      codeLink: "https://github.com/aatishjadhav/TextUtils",
    },
    {
      id: 8,
      image: Todo,
      demoLink:
        "https://react-list-todo.netlify.app/",
      codeLink: "https://github.com/aatishjadhav/React-to-do-app",
    },
    
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 pt-[20%] w-full sm:h-screen md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm-grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, demoLink, codeLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={demoLink} target="_blank">
                  <img
                    src={image}
                    alt="project-images"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                </a>

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    {" "}
                    <a href={demoLink} target="_blank">
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    <a href={codeLink} target="_blank">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
