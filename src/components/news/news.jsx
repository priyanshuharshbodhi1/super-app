import React, { useState, useEffect } from "react";
import styles from "./news.module.css";

function News() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=73c04d93cbde43e6b7cd43bd4c561d56"
    )
      .then((response) => response.json())
      .then((data) => {
        // Take the first article from the API response
        const firstArticle = data.articles[8];
        setNewsData(firstArticle);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  if (!newsData) {
    return <div>Loading...</div>;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${newsData.urlToImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  };

  // Format date and time
  const publishedAt = new Date(newsData.publishedAt);
  const formattedDate = publishedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = publishedAt.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={styles.container}
      onClick={() => window.open(newsData.url, "_blank")}
    >
      <div className={styles.image} style={backgroundImageStyle}>
        <div className={styles.title}>
          <div className={styles.headline}>
            {newsData.title.length > 60
              ? `${newsData.title.slice(0, 60)}...`
              : newsData.title}
          </div>
          <div className={styles.dateTimeContainer}>
            <div className={styles.time}>{formattedTime}</div>
            <div className={styles.separator}> | </div>
            <div className={styles.date}>{formattedDate}</div>
          </div>
        </div>
      </div>
      <div className={styles.description}>{newsData.description}</div>
    </div>
  );
}

export default News;
