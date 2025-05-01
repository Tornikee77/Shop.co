import styles from "./EmblaCarousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className="flex justify-between items-center mx-auto max-w-[1440px] max-h-[360px]">
        <h2 className="font-[900] text-[48px]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-4">
          <button onClick={scrollPrev} className="cursor-pointer">
            <img src="./images/svg/leftEmblaArrow.svg" alt="leftArrow" />
          </button>
          <button onClick={scrollNext} className="cursor-pointer">
            <img src="./images/svg/rightEmblaArrow.svg" alt="rightArrow" />
          </button>
        </div>
      </div>

      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          <div className={styles.emblaSlide}>
            <div className={styles.card}>
              <div className={styles.scoreAndName}>
                <img src="./images/svg/fiveStar.svg" alt="scoreSvg" />
                <div className={styles.personName}>
                  <p className={styles.name}>Sarah M.</p>
                  <img src="./images/svg/greenDoneSvg.svg" alt="doneSvg" />
                </div>
              </div>
              <div className={styles.personAdvice}>
                <p className={styles.advice}>
                  "I'm blown away by the quality and style of the clothes I
                  received from Shop.co. From casual wear to elegant dresses,
                  every piece I've bought has exceeded my expectations."
                </p>
              </div>
            </div>
          </div>

          <div className={styles.emblaSlide}>
            <div className={styles.card}>
              <div className={styles.scoreAndName}>
                <img src="./images/svg/fiveStar.svg" alt="scoreSvg" />
                <div className={styles.personName}>
                  <p className={styles.name}>Alex K.</p>
                  <img src="./images/svg/greenDoneSvg.svg" alt="doneSvg" />
                </div>
              </div>
              <div className={styles.personAdvice}>
                <p className={styles.advice}>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable."
                </p>
              </div>
            </div>
          </div>

          <div className={styles.emblaSlide}>
            <div className={styles.card}>
              <div className={styles.scoreAndName}>
                <img src="./images/svg/fiveStar.svg" alt="scoreSvg" />
                <div className={styles.personName}>
                  <p className={styles.name}>James L.</p>
                  <img src="./images/svg/greenDoneSvg.svg" alt="doneSvg" />
                </div>
              </div>
              <div className={styles.personAdvice}>
                <p className={styles.advice}>
                  "As someone who's always on the lookout for unique fashion
                  pieces, I'm thrilled to have stumbled upon Shop.co. The
                  selection is on-point with the latest trends."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
