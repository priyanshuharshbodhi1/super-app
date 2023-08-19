import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import profileImage from "../../assets/images/profile.png";

function Profile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
      setName(formData.name);
      setUsername(formData.username);
      setEmail(formData.email);
    }

    const selectedCategoryData = JSON.parse(localStorage.getItem("selectedCategories"));
    if (selectedCategoryData) {
      setSelectedCategories(selectedCategoryData);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={profileImage} alt="Profile" />
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.username}>{username}</div>
        <div className={styles.categoriesSelected}>
          {selectedCategories.map((category, index) => (
            <span key={index} className={styles.categorySpan}>{category}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
