import React from "react";
import "../css/MoviesPage.css";
import userImage from "../assets/images/userimage.png";

function MoviesPage() {
  return (
    <div className="bigger-container">
      <div className="title-bar">
        <div className="app-logo">SUPER APP</div>
        <div className="user-photo">
          <img src={userImage} alt="User" />
        </div>
      </div>
      <div className="tagline">Entertainment according to your choice</div>
      <div className="movies-container"></div>
    </div>
  );
}

export default MoviesPage;
