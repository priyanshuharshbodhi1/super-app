import React, { useState, useEffect } from "react";
import "../css/NotesPage.css";
import WeatherComponent from "../components/weather/weather";
import { Link } from "react-router-dom";
import ProfileComponent from "../components/profile/profile";
import NewsComponent from "../components/news/news";

function NotesPage() {
  const [note, setNote] = useState("");

  useEffect(() => {
    // Retrieve the note from local storage on component mount
    const storedNote = localStorage.getItem("note");
    if (storedNote) {
      setNote(storedNote);
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever the note changes
    localStorage.setItem("note", note);
  }, [note]);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="dashboard">
          <div className="section" id="profile-section">
            <ProfileComponent />
          </div>
          <div className="section" id="notes-section">
            <h2>All Notes</h2>

            <textarea
              className="writehere"
              value={note}
              onChange={handleNoteChange}
            ></textarea>
          </div>
          <div className="section" id="news-section">
            <NewsComponent />
          </div>
          <div className="section" id="weather-section">
            <WeatherComponent />
          </div>
          <div className="section" id="timer-section">
            timer
          </div>
        </div>
        <Link to="/moviespage">
          <button>Browse</button>
        </Link>
      </div>
    </>
  );
}

export default NotesPage;
