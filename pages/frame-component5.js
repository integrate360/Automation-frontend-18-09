import BlogFormContainer from "../components/blog-form-container";
import styles from "./frame-component5.module.css";
const FrameComponent5 = () => {
  return (
    <div className={styles.brandFocusParent}>
      <div className={styles.brandFocus}>
        <div className={styles.brandFocusChild} />
        <div className={styles.brandFocus1}>Brand Focus</div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/rectangle-24@2x.png"
          />
          <div className={styles.groupParent}>
            <BlogFormContainer coordinates="/rectangle-25@2x.png" />
            <BlogFormContainer
              coordinates="/rectangle-251@2x.png"
              propLeft="219.38px"
              propTop="0px"
            />
            <BlogFormContainer
              coordinates="/rectangle-252@2x.png"
              propLeft="438.75px"
              propTop="0px"
            />
            <BlogFormContainer
              coordinates="/rectangle-253@2x.png"
              propLeft="658.13px"
              propTop="0px"
            />
            <BlogFormContainer
              coordinates="/rectangle-254@2x.png"
              propLeft="0px"
              propTop="151.33px"
            />
            <BlogFormContainer
              coordinates="/rectangle-255@2x.png"
              propLeft="219.38px"
              propTop="151.33px"
            />
            <BlogFormContainer
              coordinates="/rectangle-256@2x.png"
              propLeft="438.75px"
              propTop="151.33px"
            />
            <BlogFormContainer
              coordinates="/rectangle-257@2x.png"
              propLeft="658.13px"
              propTop="151.33px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
