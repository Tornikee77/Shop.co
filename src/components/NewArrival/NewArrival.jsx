import Button from "../button";
import Closes from "../organisms/Closes";
import Sale from "../organisms/Sale";

const NewArrival = () => {
  return (
    <div className="flex flex-col justify-center m-auto mb-[36px] pr-[100px] pl-[100px] border-b-[var(--color-border)] max-w-[1440px] h-[680px] 8 newArrivalContainer">
      <h2 className="m-auto mb-[55px] font-[900] text-[48px]">NEW ARRIVALS</h2>
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-center gap-5 mx-auto w-[1220px] h-[500px]">
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
      </div>

      <div className="m-auto w-[218px]">
        <Button
          text="View All"
          color="bg-transparent text-[var(--volor-black)]"
          size="w-[218px] h-[52px] rounded-[62px] m-[auto] border-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NewArrival;
