import React from "react";

const Footer = () => {
    
  return (
    <div className="h-[240px]  flex justify-center items-center ">
      <div className="h-[170px] w-[290px] ">
        <p className=" text-3xl font-bold text-center">
          Rahat <span className=" text-[#b30af5]">Khan</span>
        </p>
        <div className="flex justify-center mt-4">
          <div className="flex gap-9 text-xl font-semibold">
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Projects</p>
            <p className="cursor-pointer">Services</p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
            <div className="text-4xl flex gap-4">
            <a target="blank" href="https://github.com/Rahat-khan117"><i className="fi fi-brands-github "></i></a>
            <a target="blank" href="https://www.facebook.com/asife.khan.9480/"><i className="fi fi-brands-facebook text-blue-500"></i></a>
            <a target="blank" href="#"><i className="fi fi-brands-linkedin text-blue-500"></i></a>
            <a target="blank" href="https://www.youtube.com/"><i className="fi fi-brands-youtube text-red-500"></i></a>
            </div>
        </div>
        <p className="text-center mt-4">© Rahat khan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
