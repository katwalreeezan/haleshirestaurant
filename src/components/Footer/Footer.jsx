import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white   py-4">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="flex justify-center ">
          <div className="w-[200px] md:w-[250px] h-28  ">
            <img
              src="./images/halesi.png"
              alt="logo"
              className="w-full h-full "
            />
          </div>
        </div>
        <div className=" grid grid-cols-1  sm:grid-cols-2  gap-5 md:flex md:justify-between px-3 mb-7 ">
          <div>
            <h1 className="text-xl font-thin text-red-500"> Contact</h1>
            <p>+014768893</p>
            <p>halesirestaurant@gmail.com</p>
          </div>
          <div>
            <h1 className="text-xl font-thin text-red-500"> Opening Hour</h1>

            <p>Sunday-Monday 9:00 am - 10:00 pm</p>
            <p>Tuesday-Thursday 9:00 am - 10:00 pm</p>
            <p>Sunday-Monday 9:00 am - 10:00 pm</p>

            <p></p>
          </div>
          <div>
            <h1 className="text-xl font-thin text-red-500 "> Our Links</h1>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/about">About</a>
            </p>
            <p>
              <a href="/food">Food</a>
            </p>
          </div>
          <div>
            <h1 className="text-xl font-thin text-red-500"> Location</h1>
            <p>Pepsicola, Townplanning</p>
          </div>
        </div>
        <div className="py-2 w-2/3 text-gray-400 text-center border-t border-gray-400 mx-auto">
          ©2023 All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
