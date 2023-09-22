import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // Import the useRouter hook
import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  const [blogs, setBlogs] = useState([]);
  const blogsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const carouselRef = useRef(null);
  const router = useRouter(); // Initialize the useRouter hook

  const defaultImage =
    "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/post/news`);
        setBlogs(response.data.posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      // If on the first page, loop to the last page
      setCurrentPage(totalPages);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      // If on the last page, loop to the first page
      setCurrentPage(1);
    }
  };

  // Handle blog click and redirect to the /category/article route
  const handleBlogClick = (blogId) => {
    router.push(`/category/news?id=${blogId}`);
  };

  const renderBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const visibleBlogs = blogs.slice(startIndex, endIndex);

    return visibleBlogs.map((blog, index) => (
      <div
        key={index}
        className={styles.rectangleParent}
        onClick={() => handleBlogClick(blog.id)} // Add click event to redirect
      >
        <img
          className={styles.groupChild}
          alt=""
          src={blog.image || defaultImage}
        />
        <div className={styles.blogTitle}>{truncateWords(blog.title, 6)}</div>
      </div>
    ));
  };

  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    } else {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
  };

  return (
    <div className={styles.featuredContentParent}>
      <div className={styles.featuredContent}>
        <h1 className={styles.featuredContent1}>Featured Content</h1>
        <div className={styles.carouselContainer}>
          <button
            className={`${styles.carouselButton1} prev`}
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <div className={styles.carouselWrapper} ref={carouselRef}>
            {renderBlogs()}
          </div>
          <button
            className={`${styles.carouselButton2} next`}
            onClick={handleNextClick}
          >
            &gt;
          </button>
        </div>
        <div className={styles.featuredContentChild}>
          {/* ... (navigation buttons, same as before) */}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
