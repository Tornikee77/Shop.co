import React from "react";
import styles from "./RunnerField.module.css";

const RunnerField = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <img
          src="./images/png/versace.png"
          alt="versace"
          className={styles.img}
        />
        <img src="./images/png/zara.png" alt="zara" className={styles.img} />
        <img src="./images/png/gucci.png" alt="gucci" className={styles.img} />
        <img src="./images/png/prada.png" alt="prada" className={styles.img} />
        <img
          src="./images/png/calvinClain.png"
          alt="calvinClain"
          className={styles.img}
        />
        <img
          src="./images/png/versace.png"
          alt="versace"
          className={styles.img}
        />
        <img src="./images/png/zara.png" alt="zara" className={styles.img} />
        <img src="./images/png/gucci.png" alt="gucci" className={styles.img} />
        <img src="./images/png/prada.png" alt="prada" className={styles.img} />
        <img
          src="./images/png/calvinClain.png"
          alt="calvinClain"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default RunnerField;
