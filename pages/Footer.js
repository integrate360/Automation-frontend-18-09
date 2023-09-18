import styles from "./frame-component11.module.css";
const Footer = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.footerParent}>
        <div className={styles.footer} />
        <div >
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
            <p className={styles.buySubscription}>Buy Subscription</p>
            <p className={styles.buySubscription}>Magazine</p>
            <p className={styles.buySubscription}>Add Company</p>
            <p className={styles.buySubscription}>Media Kit</p>
            <p className={styles.buySubscription}>Advertise</p>
            <p className={styles.buySubscription}>FAQ’s</p>
            <p className={styles.buySubscription}>Payment Options</p>
            <p className={styles.buySubscription}>Contact Us</p>
          </div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.advertisementParent}>
          <div className={styles.advertisement}>Advertisement</div>
          <div className={styles.interviewsCoverStoryContainer}>
            <p className={styles.buySubscription}>Interviews</p>
            <p className={styles.buySubscription}>Cover Story</p>
            <p className={styles.buySubscription}>Products</p>
            <p className={styles.buySubscription}>Editor’s Desk</p>
            <p className={styles.buySubscription}>Lessons Learned</p>
          </div>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.companyParent}>
          <div className={styles.company}>Company</div>
          <div className={styles.aboutUsEditorialContainer}>
            <p className={styles.buySubscription}>About Us</p>
            <p className={styles.buySubscription}>Editorial Advisory</p>
            <p className={styles.buySubscription}>Automation Expo</p>
            <p className={styles.buySubscription}>Privacy Policy</p>
            <p className={styles.buySubscription}>Careers</p>
            <p className={styles.buySubscription}>{`Terms & Conditions`}</p>
          </div>
          <div className={styles.groupItem} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
