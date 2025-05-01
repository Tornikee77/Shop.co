import Sale from "./Sale";

const Closes = ({ img, title, price, sale }) => {
  return (
    <div className="flex gap-5 m-auto mt-8 mb-[600px] pr-[100px] pl-[100px] max-w-[1440px] newArrivalContainer heroContainer">
      <div className="t-shirtContainer">
        <img
          className="rounded-[20px] w-[295px] h-[298px]"
          src={img}
          alt={title}
        />
        <div className="mt-4 mb-[54px] cardDescription">
          <p className="w-[320px] font-[700] text-[20px]">{title}</p>
          <div className="flex gap-[13px] score">
            <img src="./images/svg/score.svg" alt="score" />
            <p>
              4.5/ <span className="text-[var(--paragraph-color)]">5</span>
            </p>
          </div>
          <div className="flex gap-[10px] priceCpntainer">
            <p className="font-[700] text-[24px]">
              {sale}
              <span className="ml-[10px] text-[var(--color-sale)] line-through">
                {price}
              </span>
            </p>
            <Sale
              text="-20%"
              color="bg-[var(--color-sale-bg)] text-[var(--color-red)]"
              size="w-[58px] h-[28] rounded-[62px] flex justify-center items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Closes;
