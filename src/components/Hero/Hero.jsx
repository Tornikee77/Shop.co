import React from "react";

const Hero = () => {
  return (
    <div className="flex bg-[var(--components-bg-color)] m-auto mt-8 max-w-[1440px] h-[643px] heroContainer">
      <div className="flex flex-col flex-1 bg-amber-300 max-w-[720px] col heroLeftContaine">
        <div className="w-[720px] h-[173px]">
          <p className="w-[566px] h-[173px] font-[700] text-[62px] trackint-[0%]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
        </div>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button>Shop Now</button>
      </div>
      {/* <div className="flex-1 max-w-[720px] heroRigthContainer">
        <img className="" src="images/png/heroPhoto.jpg" alt="HeroPhoto" />
      </div> */}
    </div>
  );
};

export default Hero;
