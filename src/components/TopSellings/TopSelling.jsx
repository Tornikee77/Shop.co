import React from "react";
import Button from "../button";
import Closes from "../organisms/Closes";
import { Link } from "react-router-dom";

const TopSelling = () => {
  return (
    <div className="flex flex-col mx-auto mb-[80px] border-b-[var(--color-border)] max-w-[1440px] h-[680px] newArrivalContainer">
      <h2 className="mx-auto mb-[55px] font-[900] text-[48px]">TOP SELLING</h2>

      <div className="flex gap-5 w-[1220px] h-[500px]">
        <Link to="/product">
          <div className="w-[295px] h-[455px]">
            <Closes
              title="VERTICAL STRIPED SHIRT"
              sale="$212"
              price="232"
              img="./images/png/greenShirt.png"
            />
          </div>
        </Link>
        <Link to="/product">
          <div className="w-[295px] h-[283px]">
            <Closes
              title="COURAGE GRAPHIC T-SHIRT"
              price="260"
              sale="$240"
              img="./images/png/topSellingOrange.png"
            />
          </div>
        </Link>
        <Link to="/product">
          <div className="w-[295px] h-[283px]">
            <Closes
              title="LOOSE FIT BERMUDA SHORTS"
              sale="$80"
              img="./images/png/blueSkirt.png"
            />
          </div>
        </Link>
        <Link to="/product">
          <div className="w-[295px] h-[283px]">
            <Closes
              title="FADED SKINNY JEANS"
              sale="$210"
              img="./images/png/blackTrouser.png"
            />
          </div>
        </Link>
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
