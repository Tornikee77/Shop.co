import React from "react";
import Button from "../button";

const Hero = () => {
  return (
    <div className="flex bg-[var(--components-bg-color)] m-auto mt-8 pr-[100px] pl-[100px] max-w-[1440px] h-[643px] heroContainer">
      <div className="flex flex-col flex-1 w-[720px] col heroLeftContaine">
        <p className="w-[566px] font-[700] text-[62px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>

        <p className="mb-8 w-[545px] text-[#00000060]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button
          text="Shop Now"
          color="bg-[var(--color-black)] text-white"
          size="w-[210px] h-[52px] rounded-[62px]"
        />
        <div className="leftheroBottom flex gap-8 mt-[48px] w-[598px]">
          <div className="flex flex-col justify-center items-center ]QualityProducts internationalBrand">
            <p className="font-[700] text-[40px]">200+</p>
            <p className="text-[#00000060]">Interational Brands</p>
          </div>
          <div className="border w-[1px] h-[100%] text-[#00000010]"></div>
          <div className="flex flex-col justify-center items-center QualityProducts internationalBrand">
            <p className="font-[700] text-[40px]">2000+</p>
            <p className="text-[#00000060]">High-Quality Products</p>
          </div>
          <div className="border w-[1px] h-[100%] text-[#00000010]"></div>
          <div className="flex flex-col justify-center items-center happyCustomers internationalBrand">
            <p className="font-[700] text-[40px]">30,000+</p>
            <p className="text-[#00000060]">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
