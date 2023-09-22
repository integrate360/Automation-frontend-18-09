import { useRouter } from "next/router";
import styles from "./frame-component11.module.css";
const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.groupParent}>
      <div className={styles.footerParent}>
        <div className={styles.footer} />
        <div>
          <img className={styles.logoFull1} alt="" src="/logo-full-1@2x.png" />
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.industrialAutomationIs}>
            Industrial Automation is a monthly magazine published by IED
            Communications since 1980, catering to the factory and process
            automation needs of the industry
          </div>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.quickLinksParent}>
          <div className={styles.quickLinks}>Quick Links</div>
          <div className={styles.buySubscriptionMagazineContainer}>
            <p className={styles.buySubscription} onClick={() => router.push(`/subscription/subscription`)}>Buy Subscription</p>
            <p className={styles.buySubscription} onClick={() => router.push(`/contact-us`)}>Contact Us</p>
          </div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.advertisementParent}>
          <div className={styles.advertisement}>Advertisement</div>
          <div className={styles.interviewsCoverStoryContainer}>
            <p
              className={styles.buySubscription}
              onClick={() => router.push(`/category/products`)}
            >
              Products
            </p>
            <p
              className={styles.buySubscription}
              onClick={() => router.push(`/category/interview`)}
            >
              Interviews
            </p>
            <p
              className={styles.buySubscription}
              onClick={() => router.push(`/category/news`)}
            >
              News
            </p>
            <p
              className={styles.buySubscription}
              onClick={() => router.push(`/category/article`)}
            >
               Aricles
            </p>
            <p
              className={styles.buySubscription}
              onClick={() => router.push(`/category/casestudy`)}
            >
              Case Study
            </p>
          </div>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.companyParent}>
          <div className={styles.company}>Company</div>
          <div className={styles.aboutUsEditorialContainer}>
            <p
              className={styles.buySubscription}
              onClick={() => router.push(`/about`)}
            >
              About Us
            </p>
            <p
              className={styles.buySubscription}
              onClick={() => router.push(`/privacypolicy`)}
            >
              Privacy Policy
            </p>
            <p
              className={styles.buySubscription}
              onClick={() => router.push(`/termsandconditions`)}
            >
              Terms & Conditions
            </p>
          </div>
          <div className={styles.groupItem} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
