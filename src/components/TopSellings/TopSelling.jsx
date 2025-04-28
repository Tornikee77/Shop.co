import React from "react";
import Button from "../button";
import Closes from "../organisms/Closes";

const TopSelling = () => {
  return (
    <div className="flex flex-col m-auto mt-8 mb-[600px] pr-[100px] pl-[100px] border-b-[var(--color-border)] max-w-[1440px] h-[] newArrivalContainer heroContainer">
      <div className="w-[100%] title">
        <h2 className="flex justify-center mb-[55px] font-[900] text-[48px]">
          TOP SELLING
        </h2>
      </div>

      <div className="flex gap-3 closeContainer">
        <div className="w-[295px] h-[283px]">
          <Closes
            title="VERTICAL STRIPED SHIRT"
            sale="$212"
            price="232"
            img="./images/png/greenShirt.png"
          />
        </div>
        <div className="w-[295px] h-[283px]">
          <Closes
            title="COURAGE GRAPHIC T-SHIRT"
            price="260"
            sale="$240"
            img="./images/png/topSellingOrange.png"
          />
        </div>
        <div className="w-[295px] h-[283px]">
          <Closes
            title="LOOSE FIT BERMUDA SHORTS"
            sale="$80"
            img="./images/png/blueSkirt.png"
          />
        </div>
        <div className="w-[295px] h-[283px]">
          <Closes
            title="FADED SKINNY JEANS"
            sale="$210"
            img="./images/png/blackTrouser.png"
          />
        </div>
      </div>
      <div className="mt-[40px] w-[218px]">
        <Button
          text="View All"
          color="bg-transparent text-[var(--volor-black)]"
          size="w-[218px] h-[52px] rounded-[62px] m-[auto] border-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TopSelling;
