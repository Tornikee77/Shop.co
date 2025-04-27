import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className="flex items-center bg-[var(--components-bg-color)] m-auto mt-8 pr-[100px] pl-[100px] max-w-[1440px] h-[643px]">
      <div className="flex justify-between m-auto px-[100px] w-full max-w-[1440px] h-[643px] footerTopContainer">
        <section className="flex flex-col w-[290px] socMedia">
          <h5 className="font-[900] text-[34px]">SHOP.CO</h5>
          <p className="mt-[25px] w-[100%]font-[14px] text-[#00000060] footerDescription">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3 mt-[35px] socNets">
            <div className="flex justify-center items-center bg-white rounded-[50%] w-[28px] h-[28px] twitter">
              <a href="https://x.com/">
                <img
                  src="./images/svg/twitter.svg
                "
                  alt="twitter"
                />
              </a>
            </div>
            <div className="flex justify-center items-center bg-[var(--color-black)] rounded-[50%] w-[28px] h-[28px] facebook">
              <a href="https://www.facebook.com/">
                <img src="images/svg/facebook.svg" alt="afcebook" />
              </a>
            </div>
            <div className="flex justify-center items-center bg-white rounded-[50%] w-[28px] h-[28px] instagram">
              <a href="https://www.instagram.com/">
                <img src="images/svg/footerInstagram.svg" alt="instagram" />
              </a>
            </div>
            <div className="flex justify-center items-center bg-white rounded-[50%] w-[28px] h-[28px] github">
              <a href="https://github.com">
                <img src="images/svg/footerGithub.svg" alt="github" />
              </a>
            </div>
          </div>
        </section>
        <section className="ml-[113px] w-[104px] company">
          <p className="mb-[28px] font-[500]">Company</p>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Feature</a>
            </li>
            <li>
              <a href="/">Works</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
          </ul>
        </section>
        <section className="ml-[113px] w-[200px] help">
          <p className="mb-[28px] font-[500]">HELP</p>
          <ul>
            <li>
              <a href="/">Customer Suppor</a>
            </li>
            <li>
              <a href="/">Delivery Details</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </section>
        <section className="ml-[113px] w-[175px] faq">
          <p className="mb-[28px] font-[500]">FAQ</p>
          <ul>
            <li>
              <a href="/">Account</a>
            </li>
            <li>
              <a href="/">Manage Deliveries</a>
            </li>
            <li>
              <a href="/">Orders</a>
            </li>
            <li>
              <a href="/">Payments</a>
            </li>
          </ul>
        </section>
        <section className="ml-[149px] w-[200px] resources">
          <p className="mb-[28px] font-[500]">Resources</p>
          <ul>
            <li>
              <a href="/">Free eBooks</a>
            </li>
            <li>
              <a href="/">Development Tutorial</a>
            </li>
            <li>
              <a href="/">How to - Blog</a>
            </li>
            <li>
              <a href="/">Youtube Playlist</a>
            </li>
          </ul>
        </section>
      </div>

      <div className="bg-amber-500 w-[100%] h-[1px] line"></div>
    </footer>
  );
};

export default Footer;
