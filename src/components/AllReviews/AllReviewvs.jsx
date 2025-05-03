import { useState } from "react";
import Button from "../button";
import Style from "./AllReviews.module.css";

const AllReviews = () => {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mx-auto mb-[32px] border-gray-300 border-b w-[1240px]">
        <p
          onClick={() => setActiveTab("details")}
          className={`flex justify-center items-center w-[350px] h-[40px] cursor-pointer ${
            activeTab === "details"
              ? "border-b-2 border-[var(----color-black)]font-bold"
              : ""
          }`}
        >
          Product Details
        </p>
        <p
          onClick={() => setActiveTab("reviews")}
          className={`flex justify-center items-center w-[350px] h-[40px] cursor-pointer ${
            activeTab === "reviews"
              ? "border-b-2 border-[var(----color-black)]font-bold"
              : ""
          }`}
        >
          Rating & Reviews
        </p>
        <p
          onClick={() => setActiveTab("faqs")}
          className={`flex justify-center items-center w-[350px] h-[40px] cursor-pointer ${
            activeTab === "faqs"
              ? "border-b-2 border-[var(----color-black)]font-bold"
              : ""
          }`}
        >
          FAQs
        </p>
      </div>

      <div className="flex flex-col m-auto w-[1230px] h-[1000px]">
        <div className="flex justify-between items-center mt-[24px] mb-[24px]">
          <div>
            <p className="font-[700] text-[24px]">
              All Reviews{" "}
              <span className="text-[16px] text-[var(--paragraph-color)]">
                (451)
              </span>
            </p>
          </div>
          <div className="flex gap-[10px]">
            <div>
              <Button
                img="./images/svg/parametre.svg"
                size="w-[48px] h-[48px] rounded-[62px] flex justify-center items-center cursor-pointer"
                color="bg-[var(--button-bg-color)]"
              />
            </div>
            <button className="flex justify-center items-center gap-[23px] bg-[var(--button-bg-color)] rounded-[62px] w-[120px] h-[48px]">
              <p>Latest</p>
              <img src="./images/svg/checkboxIcon.svg" alt="" />
            </button>
            <div>
              <Button
                text="Write a Review"
                size="w-[166px] h-[48px] flex justify-center items-center rounded-[62px]"
                color="bg-[var(--color-black)] text-[var(--color-white)]"
              />
            </div>
          </div>
        </div>

        <div className={Style.reviewsCardContainer}>
          <div className={Style.reviewsCardContainer}>
            <div
              className={`${Style.reviewCard1} flex flex-col bg-[var(--color-white)] border border-gray-300 rounded-[20px] w-[610px] h-[241px]`}
            >
              <div className="flex justify-between mt-[28px] pr-8 pl-8">
                <img
                  className="w-[127px]"
                  src="./images/svg/score.svg"
                  alt=""
                />
                <img src="./images/svg/details.svg" alt="" />
              </div>
              <div className="flex gap-1 mt-[15px] pr-8 pl-8">
                <p>Samantha D.</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
              <div>
                <p className="mt-3 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p className="mt-6 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>

            <div
              className={`${Style.reviewCard2} flex flex-col bg-[var(--color-white)] border border-gray-300 rounded-[20px] w-[610px] h-[241px]`}
            >
              <div className="flex justify-between mt-[28px] pr-8 pl-8">
                <img
                  className="w-[127px]"
                  src="./images/svg/score.svg"
                  alt=""
                />
                <img src="./images/svg/details.svg" alt="" />
              </div>
              <div className="flex gap-1 mt-[15px] pr-8 pl-8">
                <p>Samantha D.</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
              <div>
                <p className="mt-3 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p className="mt-6 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>

            <div
              className={`${Style.reviewCard3} flex flex-col bg-[var(--color-white)] border border-gray-300 rounded-[20px] w-[610px] h-[241px]`}
            >
              <div className="flex justify-between mt-[28px] pr-8 pl-8">
                <img
                  className="w-[127px]"
                  src="./images/svg/score.svg"
                  alt=""
                />
                <img src="./images/svg/details.svg" alt="" />
              </div>
              <div className="flex gap-1 mt-[15px] pr-8 pl-8">
                <p>Samantha D.</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
              <div>
                <p className="mt-3 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p className="mt-6 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>

            <div
              className={`${Style.reviewCard4} flex flex-col bg-[var(--color-white)] border border-gray-300 rounded-[20px] w-[610px] h-[241px]`}
            >
              <div className="flex justify-between mt-[28px] pr-8 pl-8">
                <img
                  className="w-[127px]"
                  src="./images/svg/score.svg"
                  alt=""
                />
                <img src="./images/svg/details.svg" alt="" />
              </div>
              <div className="flex gap-1 mt-[15px] pr-8 pl-8">
                <p>Samantha D.</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
              <div>
                <p className="mt-3 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p className="mt-6 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>

            <div
              className={`${Style.reviewCard5} flex flex-col bg-[var(--color-white)] border border-gray-300 rounded-[20px] w-[610px] h-[241px]`}
            >
              <div className="flex justify-between mt-[28px] pr-8 pl-8">
                <img
                  className="w-[127px]"
                  src="./images/svg/score.svg"
                  alt=""
                />
                <img src="./images/svg/details.svg" alt="" />
              </div>
              <div className="flex gap-1 mt-[15px] pr-8 pl-8">
                <p>Samantha D.</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
              <div>
                <p className="mt-3 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p className="mt-6 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>

            <div
              className={`${Style.reviewCard6} flex flex-col bg-[var(--color-white)] border border-gray-300 rounded-[20px] w-[610px] h-[241px]`}
            >
              <div className="flex justify-between mt-[28px] pr-8 pl-8">
                <img
                  className="w-[127px]"
                  src="./images/svg/score.svg"
                  alt=""
                />
                <img src="./images/svg/details.svg" alt="" />
              </div>
              <div className="flex gap-1 mt-[15px] pr-8 pl-8">
                <p>Samantha D.</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
              <div>
                <p className="mt-3 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p className="mt-6 pr-8 pl-8 w-[522px] text-[var(--paragraph-color)]">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
