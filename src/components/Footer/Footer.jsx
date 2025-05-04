import React from "react";

import Button from "../button";

const Footer = () => {
  return (
    <div className="relative">
      <div className="top-[-100px] right-1/2 absolute flex justify-between items-center bg-[var(--color-black)] pr-[64px] pl-[64px] rounded-[20px] w-[1220px] h-[180px] translate-x-1/2 transform latestOffers">
        <h2 className="w-[551px] text-[40px] text-white fonr-[700]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col gap-[14px] subButtons">
          <Button
            text="Enter your email address"
            size="w-[349px] h-[48px] flex justify-center items-center gap-3 rounded-[62px] cursor-pointer
            "
            color="bg-[var(--color-white)]"
            img="./images/svg/messageIcon.svg"
          />
          <Button
            text="Enter your email address"
            size="w-[349px] h-[48px] flex justify-center items-center gap-3 rounded-[62px] cursor-pointer
            "
            color="bg-[var(--color-white)]"
          />
        </div>
      </div>
      <footer className="flex flex-col justify-center bg-[var(--components-bg-color)] m-auto mt-8 pr-[100px] pl-[100px] max-w-[1440px] h-[589px]">
        <div className="flex justify-center mt-[50px] px-[100px] max-w-[1220px] footerTopContainerborder-b">
          <section className="flex flex-col w-[290px] h-[177px] socMedia">
            <h5 className="font-[900] text-[34px]">SHOP.CO</h5>
            <p className="mt-[25px] w-[260px] font-[14px] text-[#00000060] footerDescription">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3 mt-[35px] socNets">
              <div className="flex justify-center items-center bg-white rounded-[50%] w-[28px] h-[28px] twitter">
                <a href="https://x.com/">
                  <img
                    src="/images/svg/twitter.svg
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
          <section className="ml-[113px] w-[104px] h-[177px] company">
            <p className="mt-[10px] mb-[26px] font-[500 tex-[16px]">Company</p>
            <ul className="flex flex-col gap-[17px] m-auto w-[104px] h-[177px]">
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
          <section className="ml-[113px] w-[136px] help">
            <p className="mt-[10px] mb-[28px] font-[500]">HELP</p>
            <ul className="flex flex-col gap-[17px] m-auto w-[150px] h-[177px]">
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
          <section className="ml-[113px] w-[150px] faq">
            <p className="mt-[10px] mb-[28px] font-[500]">FAQ</p>
            <ul className="flex flex-col gap-[17px] m-auto w-[150px] h-[177px]">
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
          <section className="ml-[113px] w-[150px] resources">
            <p className="mt-[10px] mb-[28px] font-[500]">Resources</p>
            <ul className="flex flex-col gap-[17px] m-auto w-[200px] h-[177px]">
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
        <div className="bg-[var(--color-line)] mt-[30px] w-[100%] h-[1px] line"></div>
        <div className="flex justify-between mt-[25px] w-[1220px] footerBottomContainer">
          <p className="text-[var(--paragraph-color)]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-3 payments">
            <img src="/images/svg/visa.svg" alt="" />
            <img src="/images/svg/masterCard.svg" alt="" />
            <img src="/images/svg/payPal.svg" alt="" />
            <img src="/images/svg/applePay.svg" alt="" />
            <img src="/images/svg/googlePay.svg" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
