import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Style from "./Product.module.css";

const Product = () => {
  return (
    <div>
      <Header />
      <div
        className={`${Style.productContainer} grid m-auto w-[1240px] mb-[500px]`}
      >
        <div className={Style["front-T-shirt"]}>
          <img src="./images/png/productFrontImg.png" alt="t-shirt" />
        </div>
        <div className={Style["backT-shirt"]}>
          <img src="images/png/productBackImg.png" alt="t-shirt" />
        </div>
        <div className={Style["boyWearsT-shirt"]}>
          <img src="images/png/boyWearT-shirt.png" alt="t-shirt" />
        </div>
        <div className={Style["productMainT-shirt"]}>
          <img src="./images/png/productMainT-shirt.png" alt="" />
        </div>
        <div className={Style["description"]}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
