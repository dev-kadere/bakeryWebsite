import React from "react";

const Hero = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-10 py-5"
      aria-label="Hero section with fresh breads and breakfast options"
    >
      <div className="flex flex-col items-center md:items-start md:justify-center md:mt-20 ">
        <h3 className="sub-title text-3xl mt-5 md:mt-20 md:text-4xl italic">
          Delicious
        </h3>
        <h1 className="title text-4xl mt-3 md:text-7xl">Fresh Breads</h1>
        <div className="featured flex flex-row  items-center gap-5 mt-3 md:mt-5">
          <img
            src="/images/hero-img-1.png"
            alt=""
            className="hidden featured-img md:block md:w-[200px] md:mt-5"
          />
          <div className="flex flex-col items-center md:items-start ">
            <strong className="text-lg md:text-3xl">Breakfast</strong>
            <span className=" text-center md:text-xl">
              Start your day right with flavor!
            </span>
          </div>
        </div>
        <div className="hidden featured md:flex flex-row items-center gap-5">
          <img
            src="/images/hero-img-2.png"
            alt=""
            className="featured-img md:w-[200px]"
          />
          <div className="flex flex-col items-center md:items-start ">
            <strong className=" text-lg md:text-3xl">Healthy snack</strong>
            <span className="text-center md:text-xl">
              Freash, crisp and healthy bites.{" "}
            </span>
          </div>
        </div>
        <button className="hidden md:block button mt-5">Order Now</button>
      </div>
      <div className="-mt-5 md:w-1/2">
        <img
          src="images/hero-img.png"
          alt=""
          className=" w-60 h-auto md:w-7xl"
        />
      </div>
      <button className="md:hidden button mt-5">Order Now</button>
    </section>
  );
};

export default Hero;
