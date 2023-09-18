import styles from "./frame-component9.module.css";
const FrameComponent9 = () => {
  return (
    <div className={styles.eventsParent}>
      <div className={styles.events}>
        <div className={styles.eventsChild} />
        <div className={styles.events1}>Events</div>
        <div className={styles.subtitle}>SUBTITLE</div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.rectangleGroup}>
              <img
                className={styles.groupItem}
                alt=""
                src="/rectangle-196@2x.png"
              />
              <div className={styles.blogTitle}>Blog Title</div>
              <div className={styles.blogSubtitle}>Blog subtitle</div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild} />
            <div className={styles.groupDiv}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-197@2x.png"
              />
              <div className={styles.blogTitle1}>Blog Title</div>
              <div className={styles.blogSubtitle1}>Blog subtitle</div>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild} />
            <div className={styles.rectangleGroup}>
              <img
                className={styles.groupItem}
                alt=""
                src="/rectangle-198@2x.png"
              />
              <div className={styles.blogTitle}>Blog Title</div>
              <div className={styles.blogSubtitle}>Blog subtitle</div>
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild} />
            <div className={styles.rectangleGroup}>
              <img
                className={styles.groupItem}
                alt=""
                src="/rectangle-199@2x.png"
              />
              <div className={styles.blogTitle}>Blog Title</div>
              <div className={styles.blogSubtitle}>Blog subtitle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
