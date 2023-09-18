import styles from "./frame-component7.module.css";
const FrameComponent7 = () => {
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
            src="/rectangle-242@2x.png"
          />
          <img
            className={styles.groupInner}
            alt=""
            src="/rectangle-259@2x.png"
          />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-261@2x.png"
          />
          <img
            className={styles.groupChild1}
            alt=""
            src="/rectangle-271@2x.png"
          />
          <img
            className={styles.groupChild2}
            alt=""
            src="/rectangle-281@2x.png"
          />
          <img
            className={styles.groupChild3}
            alt=""
            src="/rectangle-291@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
