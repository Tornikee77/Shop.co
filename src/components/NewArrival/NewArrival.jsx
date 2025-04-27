import Button from "../button";

const NewArrival = () => {
  return (
    <div className="flex flex-col m-auto mt-8 mb-[600px] pr-[100px] pl-[100px] max-w-[1440px] h-[] newArrivalContainer heroContainer">
      <h2 className="m-auto mb-[55px] font-[900] text-[48px]">NEW ARRIVALS</h2>
      <div className="t-shirtContainer">
        <img
          className="rounded-[20px] w-[295px] h-[298px]"
          src="./images/png/t-shirt.png"
          alt=""
        />
        <div className="mt-4 mb-[54px] cardDescription">
          <p className="w-[280px] font-[700] text-[20px]">
            T-SHIRT WITH TAPE DETAILS
          </p>
          <div className="flex gap-[13px] score">
            <img src="./images/svg/score.svg" alt="" />
            <p>
              4.5/ <span className="text-[var(--paragraph-color)]">5</span>
            </p>
          </div>
          <p className="font-[700] text-[24px]">$120</p>
        </div>
      </div>
      <Button
        text="View All"
        color="bg-transparent text-[var(--volor-black)]"
        size="w-[218px] h-[52px] rounded-[62px] m-[auto] border-1 cursor-pointer"
      />
    </div>
  );
};

export default NewArrival;
