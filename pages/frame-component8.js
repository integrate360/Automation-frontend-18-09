import BlogWrapper from "../components/blog-wrapper";
import styles from "./frame-component8.module.css";
const FrameComponent8 = () => {
  return (
    <div className={styles.articlesParent}>
      
      <div className={styles.component}>
      <div className={styles.articles}>
        <div className={styles.articles1}>Articles</div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-31@2x.png"
          />
          <BlogWrapper />
          <img className={styles.groupItem} alt="" src="/rectangle-32@2x.png" />
          <BlogWrapper propTop="278.49px" propLeft="422px" />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group1@2x.png"
          />
          <img
            className={styles.groupInner}
            alt=""
            src="/rectangle-36@2x.png"
          />
          <BlogWrapper propTop="522.49px" propLeft="1px" />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-33@2x.png"
          />
          <BlogWrapper propTop="121.49px" propLeft="842px" />
          <img
            className={styles.groupChild1}
            alt=""
            src="/rectangle-34@2x.png"
          />
          <BlogWrapper propTop="577.49px" propLeft="420px" />
        </div>
        <BlogWrapper propTop="664.49px" propLeft="843px" />
      </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
