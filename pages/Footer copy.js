import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";
import { useState } from "react";
import sidebarStyles from "../components/sidebar.module.css";
import HeaderAds from "../components/HeaderAds";
const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "Events", path: "/events/events" },
    { label: "Directories", path: "/directory/directories" },
    { label: "About Us", path: "/about" },
    // Add more pages as needed
  ];

  const currentDate = new Date();

  // Format the date as "Tuesday, 11.05.2023"
  const formattedDate = currentDate.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <div className={styles.topMenuParent}>
      <div className={styles.topMenu}>
        <HeaderAds />
        {/* <div className={styles.topMenuItem} /> */}
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <b className={styles.subscribeNow} onClick={() => router.push(`/subscription/subscription`)} style={{cursor:"pointer"}}>Subscribe Now</b>
        </div>
        <div className={styles.hamburgerMenu} onClick={toggleSidebar}>
          {/* <div className={styles.hamburgerIcon}> */}
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
          {/* </div> */}
        </div>

        <div
          className={`${sidebarStyles.sidebar} ${
            isSidebarOpen ? sidebarStyles.open : ""
          }`}
        >
          <div className={sidebarStyles.navbarhead}>
            <img
              className={styles.logoFull1}
              alt=""
              src="/logo-full-11@2x.png"
              onClick={() => router.push(`/`)}
            />
          </div>
          <div className={sidebarStyles.navbar}>
            <div className={sidebarStyles.navbarItem}>
              <a href="/" className={sidebarStyles.navLink}>
                Home
              </a>
            </div>
            <div className={sidebarStyles.navbarItem}>
              <a href="/about" className={sidebarStyles.navLink}>
                About Us
              </a>
            </div>
            <div className={sidebarStyles.navbarItem}>
              <a href="/contactus" className={sidebarStyles.navLink}>
                Contact Us
              </a>
            </div>
            <div className={sidebarStyles.navbarItem}>
              <a href="/privacypolicy" className={sidebarStyles.navLink}>
                Privacy Policy
              </a>
            </div>
            <div className={sidebarStyles.navbarItem}>
              <a href="/termsandconditions" className={sidebarStyles.navLink}>
                Terms & Conditions
              </a>
            </div>
            <div className={sidebarStyles.navbarItem}>
              <a href="/mediapartner" className={sidebarStyles.navLink}>
                Media Partner
              </a>
            </div>
          </div>
        </div>
        {/* Menu Items */}
        {isMenuOpen && (
          <div className={styles.menuItems}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={styles.menuItem}
                onClick={() => handleMenuItemClick(item.path)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.logo}>
        <div className={styles.logoChild} />
        <img
          className={styles.logoFull1}
          alt=""
          src="/logo-full-11@2x.png"
          onClick={() => router.push(`/`)}
        />
      </div>
      <div className={styles.homeParent}>
        {/* <div className={styles.navbar}>Featured</div> */}
        <div
          className={styles.navbar}
          onClick={() => router.push(`/category/products`)}
        >
          Products
        </div>
        <div
          className={styles.navbar}
          onClick={() => router.push(`/category/interview`)}
        >
          Interviews
        </div>
        {/* <div className={styles.navbar}>Magazines</div> */}
        <div
          className={styles.navbar}
          onClick={() => router.push(`/category/news`)}
        >
          News
        </div>
        <div
          className={styles.navbar}
          onClick={() => router.push(`/category/casestudy`)}
        >
          Case Study
        </div>
        <div
          className={styles.navbar}
          onClick={() => router.push(`/category/article`)}
        >
          Aricles
        </div>
        <div
          className={styles.navbar}
          onClick={() => router.push(`/events/events`)}
        >
          Events
        </div>
        <div
          className={styles.navbar}
          onClick={() => router.push(`/directory/directories`)}
        >
          Directories
        </div>
      </div>
      {/* <div className={styles.tuesday11052023Parent}>
        <div className={styles.home}>{formattedDate} |</div>
        <div className={styles.trending}>Trending</div>
        <div className={styles.specials}>Specials</div>
        <div className={styles.faqs}>FAQs</div>
        <div className={styles.pressRelease}>Advertise With Us</div>
        <div className={styles.more}>More</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild4} />
        <div className={styles.login}>Login</div>
      </div> */}
    </div>
  );
};

export default Header;
