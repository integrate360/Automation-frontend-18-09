import styles from "./frame-component6.module.css";
const FrameComponent6 = () => {
  return (
    <div className={styles.ctaParent}>
      <div className={styles.cta}>
        <div className={styles.ctaChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.subscribeNow}>Subscribe Now</b>
        </div>
        <div className={styles.magazineAd}>Magazine Ad</div>
        <div className={styles.magazineDetails}>Magazine Details</div>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.groupItem}
            alt=""
            src="/rectangle-241@2x.png"
          />
          <img
            className={styles.groupInner}
            alt=""
            src="/rectangle-258@2x.png"
          />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-26@2x.png"
          />
          <img
            className={styles.groupChild1}
            alt=""
            src="/rectangle-27@2x.png"
          />
          <img
            className={styles.groupChild2}
            alt=""
            src="/rectangle-28@2x.png"
          />
          <img
            className={styles.groupChild3}
            alt=""
            src="/rectangle-29@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
