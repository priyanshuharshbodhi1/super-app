import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userImage from "../assets/images/userimage.png";
import styles from "../css/MoviesPage.module.css";

function MoviesPage() {
  const apiKey = "da07e48e477dc90d013a12f9e91c8d3a";
  const selectedCategories =
    JSON.parse(localStorage.getItem("selectedCategories")) || [];

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      const moviePromises = selectedCategories.map((category) => {
        const genreId = getGenreIdForCategory(category);
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=1`;

        return fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => data.results.slice(9, 14))
          .catch((error) => {
            console.error("Error fetching movie data:", error);
            return [];
          });
      });

      Promise.all(moviePromises)
        .then((results) => {
          setMovieData(results);
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    }
  }, [selectedCategories]);

  function getGenreIdForCategory(category) {
    const genreIdMap = {
      Action: 28,
      Drama: 18,
      Thriller: 53,
      Romance: 10749,
      Western: 37,
      Horror: 27,
      Fantasy: 14,
      Music: 10402,
      Fiction: 878,
    };

    return genreIdMap[category];
  }

  return (
    <div className={styles.biggerContainer}>
      <div className={styles.titleBar}>
        <div className={styles.appLogo}>SUPER APP</div>
        <div className={styles.userPhoto}>
          <Link to="/selectcategory">
            <img src={userImage} alt="User" />
          </Link>
        </div>
      </div>
      <div className={styles.tagLine}>
        Entertainment according to your choice
      </div>
      <div className={styles.movieContainer}>
        {movieData.map((movies, index) => (
          <div key={index} className={styles.movieCategory}>
            <h2 className={styles.categoryName}>{selectedCategories[index]}</h2>
            <div className={styles.movieList}>
              {movies.map((movie) => (
                <div key={movie.id} className={styles.movieImage}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
