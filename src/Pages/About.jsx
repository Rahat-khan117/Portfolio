import React from "react";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:gap-12 lg:gap-10 md:gap-7 sm:gap-4 gap-3">
      <div className="flex flex-col sm:flex-row gap-12">
        <div className="h-[300px] w-[190px] bg-linear-to-r from-[#c061e5] to-[#53176b] rounded-2xl flex justify-center items-center">
          <div>
            <p className="text-9xl font-bold">2+</p>
            <p className="text-xl font-bold text-center">Year</p>
            <p className="text-xl font-bold text-center">Experience</p>
          </div>
        </div>

        <div>
          <div>
            <p className="xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl text-xl font-bold md:leading-[3.5rem]">
              Over Two year of programming,<br /> I have developed lots of
              projects <br /> using Creativity and my <br /> programming
              knowledge
            </p>
            <button
              className="btn w-fit mt-4 bg-linear-to-r from-[#b30af5] to-[#d288ef] text-xl
           hover:bg-linear-to-r hover:from-[#d288ef] hover:to-[#b30af5] "
            >
              <i class="fa-solid fa-download"></i>
              Download Resume
            </button>
          </div>
        </div>
      </div>





      <div className="flex flex-row lg:flex-col gap-6 ml-7 mt-4">
        <div className="flex justify-center items-center ">
          <div>
            <p className="sm:text-5xl text-3xl font-bold">50+</p>
            <p className="text-xl mt-2">Projects done</p>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div>
            <p className="text-5xl font-bold">9+</p>
            <p className="text-xl mt-2">Frontend skills </p>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div>
            <p className="text-5xl font-bold">6+</p>
            <p className="text-xl mt-2">Backend skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
