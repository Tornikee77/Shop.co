import styles from "./Dressstyle.module.css";

const Dressstyles = () => {
  return (
    <div className="grid bg-[var(--button-bg-color)] mx-auto mb-[80px] pr-[100px] pl-[100px] rounded-[40px] max-w-[1440px]">
      <h2 className="m-auto mt-[70px] mb-16 font-[700] text-[48px] dressTitle">
        BROWSE BY Dress STYLE
      </h2>
      <div className={styles.gridDressContainer}>
        <div className={styles.casual}>
          <img src="./images/png/dressStyle.png" alt="casual" />
        </div>
        <div className={styles.formal}>
          <img src="./images/png/dressFormal.png" alt="formal" />
        </div>
        <div className={styles.party}>
          <img src="./images/png/dressParty.png" alt="party" />
        </div>
        <div className={styles.gym}>
          <img src="./images/png/dressGym.png" alt="gym" />
        </div>
      </div>
    </div>
  );
};

export default Dressstyles;
