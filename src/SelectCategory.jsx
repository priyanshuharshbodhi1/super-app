import React, { useState } from "react";
import "./css/SelectCategory.css";
import { useNavigate } from "react-router-dom";
import image1 from "./assets/images/image 1.png";
import image2 from "./assets/images/image 2.png";
import image3 from "./assets/images/image 3.png";
import image4 from "./assets/images/image 4.png";
import image5 from "./assets/images/image 5.png";
import image6 from "./assets/images/image 6.png";
import image7 from "./assets/images/image 7.png";
import image8 from "./assets/images/image 8.png";
import image9 from "./assets/images/image 9.png";
import min3 from "./assets/images/min3.svg";

function SelectCategory() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const nextPageButton = () => {
    if (selectedCategories.length >= 3) {
      navigate("/notespage");
    } else {
      document.querySelector(".min3-alert").style.display = "block";
    }
  };

  const handleCardClick = (title) => {
    if (selectedCategories.includes(title)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== title)
      );
    } else {
      setSelectedCategories([...selectedCategories, title]);
    }
  };

  const handleRemoveCategory = (title) => {
    setSelectedCategories(
      selectedCategories.filter((category) => category !== title)
    );
  };

  return (
    <>
      <div className="select-category">
        <div className="category-selected">
          <h1>SUPER APP</h1>
          <p>Choose your entertainment category</p>
          <div className="category-selected-list">
            {selectedCategories.map((category) => (
              <span key={category}>
                {category}
                <button onClick={() => handleRemoveCategory(category)}>
                  X
                </button>
              </span>
            ))}
          </div>
          <div className="min3-alert"  style={{ display: "none" }}>
            <img src={min3} alt="" />
            Minimum 3 categories required.
          </div>
        </div>
        <div className="category-cards">
          <div className="grid-container">
            <div
              className={`card card1 ${
                selectedCategories.includes("Action") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Action")}
            >
              <h2 className="title ">Action</h2>
              <img src={image1} alt="1" />
            </div>
            <div
              className={`card card2 ${
                selectedCategories.includes("Drama") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Drama")}
            >
              <h2 className="title ">Drama</h2>
              <img src={image2} alt="2" />
            </div>
            <div
              className={`card card3 ${
                selectedCategories.includes("Romance") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Romance")}
            >
              <h2 className="title ">Romance</h2>
              <img src={image3} alt="3" />
            </div>
            <div
              className={`card card4 ${
                selectedCategories.includes("Thriller") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Thriller")}
            >
              <h2 className="title ">Thriller</h2>
              <img src={image4} alt="4" />
            </div>
            <div
              className={`card card5 ${
                selectedCategories.includes("Western") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Western")}
            >
              <h2 className="title ">Western</h2>
              <img src={image5} alt="5" />
            </div>
            <div
              className={`card card6 ${
                selectedCategories.includes("Horrer") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Horrer")}
            >
              <h2 className="title ">Horrer</h2>
              <img src={image6} alt="6" />
            </div>
            <div
              className={`card card7 ${
                selectedCategories.includes("Fantasy") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Fantasy")}
            >
              <h2 className="title ">Fantasy</h2>
              <img src={image7} alt="7" />
            </div>
            <div
              className={`card card8 ${
                selectedCategories.includes("Music") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Music")}
            >
              <h2 className="title ">Music</h2>
              <img src={image8} alt="8" />
            </div>
            <div
              className={`card card9 ${
                selectedCategories.includes("Fiction") ? "selected" : ""
              }`}
              onClick={() => handleCardClick("Fiction")}
            >
              <h2 className="title ">Fiction</h2>
              <img src={image9} alt="9" />
            </div>
          </div>
          <button onClick={nextPageButton}>Next Page</button>
        </div>
      </div>
    </>
  );
}

export default SelectCategory;
