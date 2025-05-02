import { Link } from "react-router-dom";
import Button from "../button";
import Closes from "../organisms/Closes";
import Sale from "../organisms/Sale";
const NewArrival = () => {
  return (
    <div className="flex flex-col mx-auto mb-[36px] border-b-[var(--color-border)] max-w-[1440px] h-[680px] newArrivalContainer">
      <h2 className="mx-auto font-[900] text-[48px]">NEW ARRIVALS</h2>
      <div className="flex gap-5 w-[1220px] h-[500px]">
        <div className="w-[295px] h-[283px]">
          <Closes
            title="T-SHIRT WITH TAPE DETAILS"
            sale="$120"
            img="./images/png/t-shirt.png"
          />
        </div>
        <div className="w-[295px] h-[283px]">
          <Closes
            title="SKINNY FIT JEANS"
            price="260"
            sale="$240"
            img="./images/png/trousers.png"
          />
        </div>
        <div className="w-[295px] h-[283px]">
          <Closes
            title="CHECKERED SHIRT"
            sale="$180"
            img="./images/png/redShirt.png"
          />
        </div>
        <div className="w-[295px] h-[283px]">
          <Closes
            title="SLEEVE STRIPED T-SHIRT"
            sale="$180"
            img="./images/png/topSellingOrange.png"
          />
        </div>
      </div>

      <div className="m-auto mt-[36px] w-[218px]">
        <Button
          text="View All"
          color="bg-transparent text-[var(--volor-black)]"
          size="w-[218px] h-[52px] rounded-[62px] m-[auto] border-1 cursor-pointer"
        />
      </div>
      <div className="bg-[var(--color-line)] m-auto mt-[64px] w-[1240px] h-[1px] line"></div>
      <Link to="/Product">saba</Link>
    </div>
  );
};

export default NewArrival;
