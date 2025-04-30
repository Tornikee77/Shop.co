import React from "react";
import Button from "../button";
import Closes from "../organisms/Closes";

const TopSelling = () => {
  return (
    <div className="flex flex-col items-center mx-auto mb-[80px] px-[100px] border-b-[var(--color-border)] max-w-[1440px] h-[680px] newArrivalContainer">
      <h2 className="mb-[55px] font-[900] text-[48px]">TOP SELLING</h2>

      <div className="flex flex-col items-center w-full">
        <div className="flex justify-center gap-5 mx-auto w-[1220px] h-[500px]">
          <div className="w-[295px] h-[455px]">
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
      </div>

      <div className="m-auto w-[218px]">
        <Button
          text="View All"
          color="bg-transparent text-[var(--volor-black)]"
          size="w-[218px] h-[52px] rounded-[62px] border-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TopSelling;
