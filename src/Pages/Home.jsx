import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { useLoaderData } from "react-router";

const Home = () => {
    const projects = useLoaderData();
  return (
    <div className="mt-7 ">
      {/* <div className="bg-[image:var(--first-gradient)]  p-6 rounded-lg">
           Hello with custom colors!
            </div> */}

  {/* for home components */}

      <div className="flex md:flex-row md:justify-between gap-16 flex-col-reverse items-center">
        <div className="flex flex-col">
          <p className="xl:text-9xl lg:text-6xl md:text-4xl sm:text-5xl text-7xl font-bold">Rahat <br /> Khan</p>
          <p className="xl:text-5xl lg:text-3xl md:text-3xl text-3xl font-bold mt-3">I am a Web Developer</p>
          <p className="mt-3"> I'm a professional MERN stake web developer. I can develop Visually <br /> appealing website with React js and Typescript also. I am  specialized in front <br /> end development for Visually eye appeal Implementation.</p>
          <button className="btn w-fit mt-4 bg-linear-to-r from-[#b30af5] to-[#d288ef] text-xl
           hover:bg-linear-to-r hover:from-[#d288ef] hover:to-[#b30af5] text-white">My works</button>
        </div>

        <div className="flex items-center gap-6 pr-2">
            <img className="mt-4 [border-radius:46%_54%_83%_17%/65%_46%_54%_35%] bg-linear-to-r from-[#b30af5] to-[#41254d] " src="https://i.ibb.co.com/4RMyc6f4/my-photo.png" />
            <div className="flex flex-col gap-3 text-xl">
                <a target="blank" href="https://github.com/Rahat-khan117"><i className="fi fi-brands-github "></i></a>
            <a target="blank" href="https://www.facebook.com/asife.khan.9480/"><i className="fi fi-brands-facebook text-blue-500"></i></a>
            <a target="blank" href="#"><i className="fi fi-brands-linkedin text-blue-500"></i></a>
            
            </div>
        </div>
      </div>

{/*  for about section */}

     <div className="mt-28">
        <About></About>
     </div>
{/* for skills section */}

    <div className="mt-24">
        <Skills></Skills>
    </div>

    {/* for project section */}
    <div className="mt-24">
        <Projects projects={projects}></Projects>
    </div>

    </div>
  );
};

export default Home;
