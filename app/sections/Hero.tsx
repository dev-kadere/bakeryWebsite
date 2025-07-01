import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between max-w-7xl mx-auto px-10 py-5">
      <div className="flex flex-col items-center">
        <h3 className="sub-title text-3xl mt-5">Delicious</h3>
        <h1 className="title text-4xl mt-3">Fresh Breads</h1>
        <div className="featured flex flex-row items-center gap-5 mt-3">
          <img
            src="/images/hero-img-1.png"
            alt=""
            className="hidden featured-img"
          />
          <div className="flex flex-col items-center">
            <strong className="text-lg">Breakfast</strong>
            <span className=" text-center">
              Start your day right with flavor!
            </span>
          </div>
        </div>
        <div className="hidden featured flex flex-row items-center gap-5">
          <img src="/images/hero-img-2.png" alt="" className="featured-img" />
          <div className="flex flex-col items-center  ">
            <strong className=" text-lg">Healthy snack</strong>
            <span className="text-center">
              Freash, crisp and healthy bites.{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="-mt-5">
        <img src="images/hero-img.png" alt="" className=" w-60 h-auto" />
      </div>
      <button className=" button mt-5">order now</button>
    </section>
  );
};

export default Hero;
