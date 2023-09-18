import styles from "./frame-component3.module.css";
const FrameComponent3 = () => {
  return (
    <div className={styles.featuredContentParent}>
      <div className={styles.featuredContent}>
        <div className={styles.featuredContent1}>Featured Content</div>
        <div className={styles.featuredContentInner}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="/rectangle-193@2x.png"
            />
            <div className={styles.blogTitle}>Blog Title</div>
            <div className={styles.blogSubtitle}>Blog subtitle</div>
          </div>
        </div>
        <div className={styles.featuredContentChild}>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.groupItem}
              alt=""
              src="/rectangle-194@2x.png"
            />
            <div className={styles.blogTitle1}>Blog Title</div>
            <div className={styles.blogSubtitle1}>Blog subtitle</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleContainer}>
            <img
              className={styles.groupInner}
              alt=""
              src="/rectangle-195@2x.png"
            />
            <div className={styles.blogTitle}>Blog Title</div>
            <div className={styles.blogSubtitle}>Blog subtitle</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
