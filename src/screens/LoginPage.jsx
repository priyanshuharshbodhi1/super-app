import React, { useState } from "react";
import "../css/LoginPage.css";
import LoginImage from "../assets/images/login.svg";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [shareData, setShareData] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [shareDataError, setShareDataError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      username.length === 0 ||
      email.length === 0 ||
      mobile.length === 0 ||
      !shareData
    ) {
      setNameError(name.length === 0);
      setUsernameError(username.length === 0);
      setEmailError(email.length === 0);
      setMobileError(mobile.length === 0);
      setShareDataError(!shareData);
    } else {
      console.log("Form Submitted");
      const formData = {
        name: name,
        username: username,
        email: email,
        mobile: mobile,
        shareData: shareData,
      };
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate('/selectcategory');
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="image-container">
          <img src={LoginImage} alt="" />
          <p>Discover new things on Superapp</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>SUPER APP</h1>
            <h4>create your account now</h4>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError(false);
              }}
              className={nameError ? "error-field" : ""}
              required
            />
            {nameError ? <label className="empty-label">Name can't be empty.</label> : ""}
            
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError(false);
              }}
              className={usernameError ? "error-field" : ""}
            />
            {usernameError ? <label className="empty-label">Username can't be empty.</label> : ""}
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              className={emailError ? "error-field" : ""}
            />
            {emailError ? <label className="empty-label">Email can't be empty.</label> : ""}
            
            <input
              type="tel"
              placeholder="Mobile"
              maxLength={10}
              value={mobile}
              pattern="[0-9]*"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              onChange={(e) => {
                setMobile(e.target.value);
                setMobileError(false);
              }}
              className={mobileError ? "error-field" : ""}
            />
            {mobileError ? <label className="empty-label">Mobile can't be empty.</label> : ""}
            
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={shareData}
                onChange={(e) => {
                  setShareData(e.target.checked);
                  setShareDataError(false);
                }}
              />
              <label htmlFor="shareData">
                Share my registration data with Super App
              </label>
            </div>
            
            <button type="submit">Sign Up</button>
            
            <div className="terms-privacy-container">
              <p>
                By signing up, you agree to our{" "}
                <a href="/terms">Terms and Conditions of Use</a>.
              </p>
              <p>
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp{" "}
                <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
