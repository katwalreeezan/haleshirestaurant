import React from "react";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      
      <img
        className="w-full "
        src="https://cdn.pixabay.com/photo/2018/03/07/18/42/menu-3206749_960_720.jpg"
        alt="menubar"
      />
      <div className="max-w-[9xl] mx-auto mb-9  px-3">
        <div className="max-w-[600px] mx-auto  leading-relaxed text-center  px-3 text-neutral-600 text-2xl font-serif py-6">
          <p>
            Our focus is to offer high quality international cuisine with the
            elegance of fine-dining while in a relaxed and comfortable
            atmosphere. Our menu offers freshly made and unique innovative
            dishes and our service is attentive and gracious.
          </p>
        </div>
        <div className="max-w-[900px] mx-auto py-3   text-neutral-600 font-serif">
          <div className="flex flex-wrap justify-center gap-10  ">
            <div className="w-60  shadow-2xl  text-center hover:scale-105 duration-300 ">
              <img
                src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg" alt='/'
                className="w-60 h-52 "
              />
              <h1 className="py-2">Restaurant</h1>
              <p className="text-center px-2 py-3 ">
                At Halesi Restaurant we are redefining quality and service for
                fine dining in Nepal.
              </p>
            </div>
            <div className="w-60 shadow-2xl text-center hover:scale-105 duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_960_720.jpg" alt='/'
                className="w-60 h-52 "
              />
              <h1 className="py-2">Food</h1>
              <p className="text-center px-2 py-3">
                At Halesi Restaurant we are redefining quality and service for
                fine dining in Nepal.
              </p>
            </div>
            <div className="w-60 border shadow-2xl text-center hover:scale-105 duration-300">
              <img
                src="https://cdn.pixabay.com/photo/2017/07/11/18/07/market-2494520_960_720.jpg" alt='/'
                className="w-60 h-52 "
              />
              <h1 className="py-2">Market</h1>
              <p className="text-center px-2 py-3">
                At Halesi Restaurant we are redefining quality and service for
                fine dining in Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
