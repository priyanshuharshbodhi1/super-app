import React, { useState } from "react";
import "./LoginPage.scss";
import LoginImage from "./images/login.svg";
// import { useHistory } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [shareData, setShareData] = useState(false);
  const [error, setError] = useState(false);

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleMobileChange = (event) => {
  //   setMobile(event.target.value);
  // };

  // const handleShareDataChange = () => {
  //   setShareData(!shareData);
  // };

  // const history = useHistory();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (
      name.length === 0 ||
      username.length === 0 ||
      email.length === 0 ||
      mobile.length === 0 ||
      shareData === false
    ) {
      setError(true);
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
    }       
    // history.push('/Choices');
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
              onChange={(e) => setName(e.target.value)}
              required
            />
            {error && name.length <= 0 ? (
              <label className="empty-lable">Name can't be empty.</label>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && username.length <= 0 ? (
              <label className="empty-lable">Username can't be empty.</label>
            ) : (
              ""
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && email.length <= 0 ? (
              <label className="empty-lable">Email can't be empty.</label>
            ) : (
              ""
            )}
            <input
              type="tel"
              placeholder="Mobile"
              maxLength={10}
              value={mobile}
              pattern="[0-9]*"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              onChange={(e) => setMobile(e.target.value)}
            />
            {error && mobile.length <= 0 ? (
              <label className="empty-lable">Mobile can't be empty.</label>
            ) : (
              ""
            )}
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={shareData}
                onChange={(e) => setShareData(e.target.checked)}
              />
              <label htmlFor="shareData">
                Share my registration data with Super App
              </label>
            </div>
            {/* <label className="empty-lable">Please tick the Checkbox</label> */}
            <button type="submit" >Sign Up</button>
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