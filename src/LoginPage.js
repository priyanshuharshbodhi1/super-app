import React, { useState } from "react";
import "./LoginPage.scss";
import LoginImage from "./images/login.svg";

function LoginPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [shareData, setShareData] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleShareDataChange = () => {
    setShareData(!shareData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="login-page">
        <div className="image-container">
          <img src={LoginImage} alt="" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>SUPER APP</h1>
            <h4>create your account now</h4>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={mobile}
              onChange={handleMobileChange}
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={shareData}
                onChange={handleShareDataChange}
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
