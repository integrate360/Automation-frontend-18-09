import BlogSection from "../components/blog-section";
import styles from "./frame-component4.module.css";
const FrameComponent4 = () => {
  return (
    <div className={styles.featuredProductsParent}>
      <div className={styles.featuredProducts}>
        <BlogSection />
        <div className={styles.featuredProductsChild} />
        <div className={styles.blogTitle}>Blog Title</div>
        <div className={styles.blogSubtitle}>Blog subtitle</div>
        <div className={styles.featuredProducts1}>Featured Products</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
