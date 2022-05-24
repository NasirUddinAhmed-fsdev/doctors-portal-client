import React from "react";
import BgChair from "../../assets/images/bg.png";
import Chair from "../../assets/images/chair.png";
import FocusButton from "../Shared/FocusButton";

const Banner = () => {
  return (
    <div
      style={{ background: `url(${BgChair})` }}
      className="hero min-h-screen justify-center"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          className="max-w-sm xl:max-w-xl rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <FocusButton>Get Started</FocusButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
