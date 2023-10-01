import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Fronten<span className="text-cyan-400">D</span>eveloper
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          An organized and responsible individual seeking a position at the entry level in the technological sector. Excellent time management abilities, innovative, knowledge of creating responsive and user friendly applications and development and a strong desire to learn new skills and contribute in any way to the business.
          </p>

          <div>
            <Link 
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              to="projects"
              smooth
              duration={500}>
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="myImage"
            className="rounded-2xl mx-auto w-11/12 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
