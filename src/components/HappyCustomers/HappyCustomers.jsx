import styles from "./HappyCustomers.module.css";
const HappyCustomer = () => {
  return (
    <div>
      <div className="flex flex-col bg-[var(--components-bg-color)] m-auto mt-8 pr-[100px] pl-[100px] max-w-[1440px] h-[643px]">
        <div className="flex justify-between emblaAndTitle">
          <h2 className="font-[900] text-[48px]">OUR HAPPY CUSTOMERS</h2>
          <div className="flex items-center gap-4 embla">
            <button className="cursor-pointer">
              <img
                className="w-[15px] h-[18px]"
                src="./images/svg/leftEmblaArrow.svg"
                alt="leftArrow"
              />
            </button>
            <button className="cursor-pointer">
              <img
                className="w-[15px] h-[18px]"
                src="./images/svg/rightEmblaArrow.svg"
                alt="rightArrow"
              />
            </button>
          </div>
        </div>
        <div className="flex gap-5 assigmentContainer">
          <div className={`${styles.card}`}>
            <div className={`${styles.scoreAndName}`}>
              <img src="./images/svg/fiveStar.svg" alt="" />
              <div className={`${styles.personName}`}>
                <p className={`${styles.name}`}>Sarah M.</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
            </div>

            <div className="personAdvice">
              <p className={`${styles.advice} `}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
          <div className={`${styles.card}`}>
            <div className={`${styles.scoreAndName}`}>
              <img src="./images/svg/fiveStar.svg" alt="" />
              <div className={`${styles.personName}`}>
                <p className={`${styles.name}`}>Alex K.</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
            </div>

            <div className="personAdvice">
              <p className={`${styles.advice} `}>
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
          </div>
          <div className={`${styles.card}`}>
            <div className={`${styles.scoreAndName}`}>
              <img src="./images/svg/fiveStar.svg" alt="" />
              <div className={`${styles.personName}`}>
                <p className={`${styles.name}`}>James L</p>
                <img src="./images/svg/greenDoneSvg.svg" alt="" />
              </div>
            </div>

            <div className="personAdvice">
              <p className={`${styles.advice} `}>
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HappyCustomer;
