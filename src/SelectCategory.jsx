import React from "react";
import "./SelectCategory.scss";
import image1 from "./images/image 1.png";
import image2 from "./images/image 2.png";
import image3 from "./images/image 3.png";
import image4 from "./images/image 4.png";
import image5 from "./images/image 5.png";
import image6 from "./images/image 6.png";
import image7 from "./images/image 7.png";
import image8 from "./images/image 8.png";
import image9 from "./images/image 9.png";

function SelectCategory() {
  return (
    <>
      <div className="select-category">
        <div className="category-selected">
          <h1>SUPER APP</h1>
          <p>Choose your entertainment category</p>
          <p></p>
        </div>
        <div className="category-cards">
          <div className="grid-container">
            <div className="card card1">
              <h2 className="title ">Action</h2>
              <img src={image1} alt="1" />
            </div>
            <div className="card card2">
              <h2 className="title ">Drama</h2>
              <img src={image2} alt="2" />
            </div>
            <div className="card card3">
              <h2 className="title ">Romance</h2>
              <img src={image3} alt="3" />
            </div>
            <div className="card card4">
              <h2 className="title ">Thriller</h2>
              <img src={image4} alt="4" />
            </div>
            <div className="card card5">
              <h2 className="title ">Western</h2>
              <img src={image5} alt="5" />
            </div>
            <div className="card card6">
              <h2 className="title ">Horrer</h2>
              <img src={image6} alt="6" />
            </div>
            <div className="card card7">
              <h2 className="title ">Fantasy</h2>
              <img src={image7} alt="7" />
            </div>
            <div className="card card8">
              <h2 className="title ">Music</h2>
              <img src={image8} alt="8" />
            </div>
            <div className="card card9">
              <h2 className="title ">Fiction</h2>
              <img src={image9} alt="9" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectCategory;
