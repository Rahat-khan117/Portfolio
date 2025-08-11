import React from "react";

const Home = () => {
  return (
    <div className="mt-7 ">
      {/* <div className="bg-[image:var(--first-gradient)]  p-6 rounded-lg">
           Hello with custom colors!
            </div> */}



      <div className="flex md:flex-row md:justify-between gap-16 flex-col-reverse items-center">
        <div className="flex flex-col">
          <p className="xl:text-9xl lg:text-6xl md:text-4xl sm:text-5xl text-7xl font-bold">Rahat <br /> Khan</p>
          <p className="xl:text-5xl lg:text-3xl md:text-3xl text-3xl font-bold mt-3">I am a Web Developer</p>
          <p className="mt-3"> I'm a professional MERN stake web developer. I can develop Visually <br /> appealing website with React js and Typescript also. I am  specialized in front <br /> end development for Visually eye appeal Implementation.</p>
          <button className="btn w-fit mt-4 bg-linear-to-r from-[#b30af5] to-[#d288ef] text-xl
           hover:bg-linear-to-r hover:from-[#d288ef] hover:to-[#b30af5] ">My works</button>
        </div>

        <div>
            <img className="mt-4 [border-radius:46%_54%_83%_17%/65%_46%_54%_35%] bg-linear-to-r from-[#b30af5] to-[#41254d] " src="https://i.ibb.co.com/4RMyc6f4/my-photo.png" />
        </div>
      </div>




    </div>
  );
};

export default Home;
