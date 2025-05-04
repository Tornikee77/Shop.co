import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Style from "./Product.module.css";
import Sale from "../components/organisms/Sale";
import Button from "../components/button";
import AllReviewvs from "../components/AllReviews/AllReviewvs";
import MightNow from "../components/MightKnow/MightNow";

const Product = () => {
  return (
    <div>
      <Header />

      <div className="bg-[var(--color-line)] m-auto mt-[24px] mb-[24px] w-[1240px] h-[1px] line"></div>

      <div className="flex gap-3 m-auto mb-[20px] w-[1240px] pageNavigationButtons">
        <button className="flex justify-center items-center gap-[10px] w-[63px] h-[26px]">
          <p className="text-[var(--paragraph-color)]">Home</p>
          <img
            className="mt-[5px]"
            src="/images/svg/navigationArrow.svg"
            alt=""
          />
        </button>
        <button className="flex justify-center items-center gap-[10px] w-[63px] h-[26px]">
          <p className="text-[var(--paragraph-color)]">Shop</p>
          <img
            className="mt-[5px]"
            src="/images/svg/navigationArrow.svg"
            alt=""
          />
        </button>
        <button className="flex justify-center items-center gap-[10px] w-[63px] h-[26px]">
          <p className="text-[var(--paragraph-color)]">Men</p>
          <img
            className="mt-[5px]"
            src="/images/svg/navigationArrow.svg"
            alt=""
          />
        </button>
        <p>T-Shirt</p>
      </div>

      <div
        className={`${Style.productContainer} grid m-auto w-[1240px] h-[612px] justify-center mb-[80px]`}
      >
        <div className={Style["front-T-shirt"]}>
          <img
            className="flex justify-center items-center"
            src="/images/png/productFrontImg.png"
            alt="t-shirt"
          />
        </div>
        <div className={Style["backT-shirt"]}>
          <img
            className="w-[152px] h-[167px]"
            src="images/png/productBackImg.png"
            alt="t-shirt"
          />
        </div>
        <div className={Style["boyWearsT-shirt"]}>
          <img
            className="w-[152px] h-[167px]"
            src="images/png/boyWearT-shirt.png"
            alt="t-shirt"
          />
        </div>
        <div className={Style["productMainT-shirt"]}>
          <img
            className="h-[575px]"
            src="/images/png/productMainT-shirt.png"
            alt=""
          />
        </div>

        <div className={Style["description"]}>
          <h2 className="w-[598px] font-[900] text-[43px]">
            ONE LIFE GRAPHIC T-SHIRT
          </h2>

          <div className="flex items-center gap-[14px] priceCont">
            <img
              className="w-[139px]"
              src="/images/svg/score.svg"
              alt="score"
            />
            <p>
              4.5/<span className="text-[var(--paragraph-color)]">5</span>
            </p>
          </div>

          <div className="flex gap-3 prices">
            <p className="font-[700] text-[32px]">$260</p>
            <p className="font-[700] text-[32px] text-[var(--paragraph-color)] line-through">
              $300
            </p>
            <Sale
              text="-20%"
              color="bg-[var(--color-sale-bg)] text-[var(--color-red)]"
              size="w-[100px] h-[34] rounded-[62px] flex justify-center items-center"
            />
          </div>

          <p className="w-[590px] text-[var(--paragraph-color)]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="flex flex-col justify-center m-auto border-gray-300 border-t border-b w-[590px] h-[112px] colorContainer">
            <p className="text-[var(--paragraph-color)]">Select Colors</p>
            <div className="flex gap-[16px] buttons">
              <Button
                color="bg-[var(--color-tobacco-t-shirt)]"
                size="w-[50px] h-[50px] rounded-[62px] m-[auto]  cursor-pointer"
              />
              <Button
                color="bg-[var(--color-green-t-shirt)]"
                size="w-[50px] h-[50px] rounded-[62px] m-[auto]  cursor-pointer"
              />
              <Button
                color="bg-[var(--color-purple-t-shirt)]"
                size="w-[50px] h-[50px] rounded-[62px] m-[auto]  cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 border-gray-300 border-b w-[590px] h-[121px] colorContainer">
            <p className="text-[var(--paragraph-color)]">Choose Size</p>
            <div className="flex gap-4 buttons">
              <Button
                text="Small"
                color="bg-[var(--button-bg-color)] text-[var(--paragraph-color)]"
                size="w-[86px] h-[48px] rounded-[62px] m-[auto] cursor-pointer"
              />
              <Button
                text="Medium"
                color="bg-[var(--button-bg-color)] text-[var(--paragraph-color)]"
                size="w-[105px] h-[48px] rounded-[62px] m-[auto] cursor-pointer"
              />
              <Button
                text="Large"
                color="bg-[var(--button-bg-color)] text-[var(--paragraph-color)]"
                size="w-[89px] h-[48px] rounded-[62px] m-[auto] cursor-pointer"
              />
              <Button
                text="X-Large"
                color="bg-[var(--button-bg-color)] text-[var(--paragraph-color)]"
                size="w-[104px] h-[48px] rounded-[62px] m-[auto] cursor-pointer"
              />
            </div>
          </div>

          <div className="flex gap-4 buttons">
            <div>
              <button className="flex justify-center items-center gap-[20px] bg-[var(--button-bg-color)] rounded-[64px] w-[170px] h-[52px]">
                <img
                  className="cursor-pointer"
                  src="/images/svg/disCount.svg"
                  alt="decrease"
                />

                <img
                  className="cursor-pointer"
                  src="/images/svg/increase.svg"
                  alt="increase"
                />
              </button>
            </div>
            <div>
              <Button
                text="Add to cart"
                color="bg-[var(--button-bg-color)]  text-[var(--color-white)]"
                size="w-[400px] h-[52px] bg-[var(--color-black)] rounded-[62px] m-[auto]  cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <AllReviewvs />
      <MightNow />
      <Footer />
    </div>
  );
};

export default Product;
