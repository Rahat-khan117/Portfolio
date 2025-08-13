import React from "react";

const Contact = () => {
  return (
    <div className="">
        <p className="text-4xl font-bold text-center mb-12">Contact Me</p>
        <p className="sm:text-4xl text-3xl font-bold md:hidden block mb-8">
            Lets's Talk about <br /> your Project
          </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
        <div className="md:order-1 order-2">
          <p className="sm:text-4xl text-3xl font-bold hidden md:block">
            Lets's Talk about <br /> your Project
          </p>
          <div className="mt-14 space-y-9">
            <div className="flex gap-2.5 items-center">
              <div className="h-[55px] w-[55px] bg-[#b30af5] rounded-full flex items-center justify-center">
                <i className="fa-solid fa-envelope text-2xl"></i>
              </div>
              <div>
                <p className="text-xl font-bold">Contact Email</p>
                <p className=" opacity-70">rahatkhan015002@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-center">
              <div className="h-[55px] w-[55px] bg-[#b30af5] rounded-full flex items-center justify-center">
                <i className="fa-brands fa-whatsapp text-4xl"></i>
              </div>
              <div>
                <p className="text-xl font-bold">Phone/Whatsapp</p>
                <p className=" opacity-70">+8801856728504</p>
              </div>
            </div>
            <div className="flex gap-2.5 items-center">
              <div className="h-[55px] w-[55px] bg-[#b30af5] rounded-full flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-3xl"></i>
              </div>
              <div>
                <p className="text-xl font-bold">Location</p>
                <p className=" opacity-70">Rajshahi, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:col-span-2 md:order-2 order-1">
          <div className=" flex items-center justify-center   px-4">
            <form className="w-full max-w-lg space-y-6">
              {/* Name */}
              <div>
                <label className="block  font-semibold mb-1 text-xl">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-purple-500  py-2"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xl font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-purple-500  py-2"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xl font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-purple-500  py-2 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-sm hover:opacity-90 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
