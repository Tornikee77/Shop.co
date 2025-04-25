// import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between items-center m-auto mt-[24px] w-[1240px] h-[48px] headerMainContainer">
      <a href="/"></a>
      <img
        className="flex justify-center items-center w-[160px] h-[22px]"
        src="./images/svg/shopSiteLogo.svg"
        alt="siteLogo"
      />

      <nav>
        <ul className="flex gap-6 w-[321px]">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">On Sale</a>
          </li>
          <li>
            <a href="/">New Arrivals</a>
          </li>
          <li>
            <a href="/">Brands</a>
          </li>
        </ul>
      </nav>
      <div className="relative flex searchWrapper mal-[40px]">
        <img
          className="top-[13px] absolute pl-[16px]"
          src="./images/svg/search.svg"
          alt="searchIcon"
        />
        <input
          className="pl-[48px] rounded-[62px] w-[577px] h-[48px] text-[var(--button-bg-color] cursor-pointer colo"
          type="text"
          placeholder="Search for something"
        />
      </div>
      <div className="flex justify-center items-center gap-[14px] cartAndProfile">
        <img
          className="w-[24px] h-[24px]"
          src="./images/svg/cart.svg"
          alt="cart"
        />
        <img
          className="w-[24px] h-[24px]"
          src="./images/svg/profile.svg"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
