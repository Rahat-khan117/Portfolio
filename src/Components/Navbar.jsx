import React, { useState } from 'react';

const Navbar = () => {

   const [theme, setTheme] = useState("dark");

   const handleTheme = () => {
      const newTheme = (theme === "dark") ? "light" : "dark";
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme",newTheme);
   }



    return (
        <div className={`h-[70px] w-[100vw] flex items-center max-w-screen-xl mx-auto px-10 lg:px-20 sm:px-12 md:px-16   shadow-3xl ${ (theme === "dark") ? "bg-[#1d232a]" : "bg-white" }`}>
             <div className='w-full flex justify-between'>

                <div className='flex items-center'>
                    <p className=' text-3xl font-bold'>Rahat <span className=' text-[#b30af5]'>Khan</span></p>
                </div>
                <div className='flex gap-12 lg:gap-10 items-center'>
                    <p className='text-xl font-semibold hidden sm:block cursor-pointer'>Home</p>
                    <p className='text-xl font-semibold hidden sm:block cursor-pointer'>About</p>
                    <p className='text-xl font-semibold hidden sm:block cursor-pointer'>Skills</p>
                    <p className='text-xl font-semibold hidden lg:block cursor-pointer'>Projects</p>
                    <p className='text-xl font-semibold hidden lg:block cursor-pointer'>services</p>
                    <p className='text-xl font-semibold hidden lg:block cursor-pointer'>Contact</p>

                    <div className='text-3xl flex items-center'>
                       <button onClick={handleTheme}>
                        {
                            (theme === "dark") ? <i  className="fi fi-ss-brightness cursor-pointer"></i> : <i  className="fi fi-ss-moon-stars cursor-pointer"></i>
                        }
                         
                         
                       </button>
                    </div>
                    
                </div>
                 
             </div>
        </div>
    );
};

export default Navbar;