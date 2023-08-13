import React, { useState, useEffect } from "react";
import "../css/NotesPage.css";
import WeatherComponent from "../components/notespage/weather";

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
            profile page
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
            news
          </div>
          <div className="section" id="weather-section">
          <WeatherComponent />
          </div>
          <div className="section" id="timer-section">
            timer
          </div>
        </div>
        <button>Browse</button>
      </div>
    </>
  );
}

export default NotesPage;
