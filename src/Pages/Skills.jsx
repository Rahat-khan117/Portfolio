import React from "react";

const Skills = () => {
  return (
    <div>
      
      <p className="text-5xl font-bold text-center">My skills</p>


      <div className="grid  md:grid-cols-2">
        <div className="mt-9">
            <p className="text-2xl text-center font-bold">Frontend skills</p>
            <div className="grid grid-cols-3 mt-12">
               <div className="flex flex-col gap-2 items-center">
                  <div className="h-[110px] w-[90px] rounded-[46%_54%_56%_44%_/38%_34%_66%_62%] bg-gray-600 flex justify-center items-center">
                   <img className="h-[65px] w-[65px]" src="../images/html.png" />
                  </div>
                  <p className="text-xl mt-2 font-bold">HTML5</p>
                  <p className="-mt-2">Intermediate</p>
               </div>
               
            </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Skills;
