import React, { useState, useEffect } from "react";
import styles from "./timer.module.css";
import up from "../../assets/images/up.png";
import down from "../../assets/images/down.png";
import countdownbackground from "../../assets/images/countdownbackground.png";
import timerend from "../../assets/sounds/timerend.mp3"

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const handleIncrement = (type) => {
    if (type === "hours") setHours(hours + 1);
    if (type === "minutes") setMinutes(minutes + 1);
    if (type === "seconds") setSeconds(seconds + 1);
  };

  const handleDecrement = (type) => {
    if (type === "hours" && hours > 0) setHours(hours - 1);
    if (type === "minutes" && minutes > 0) setMinutes(minutes - 1);
    if (type === "seconds" && seconds > 0) setSeconds(seconds - 1);
  };

  const handleStart = () => {
    setCountdownHours(hours);
    setCountdownMinutes(minutes);
    setCountdownSeconds(seconds);
    setRunning(true);
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        if (
          countdownHours === 0 &&
          countdownMinutes === 0 &&
          countdownSeconds === 0
        ) {
          clearInterval(interval);
          setRunning(false);
          new Audio(timerend).play(); 
        } else {
          if (countdownSeconds > 0) {
            setCountdownSeconds(countdownSeconds - 1);
          } else {
            if (countdownMinutes > 0) {
              setCountdownMinutes(countdownMinutes - 1);
              setCountdownSeconds(59);
            } else {
              if (countdownHours > 0) {
                setCountdownHours(countdownHours - 1);
                setCountdownMinutes(59);
                setCountdownSeconds(59);
              }
            }
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [running, countdownHours, countdownMinutes, countdownSeconds]);

  return (
    <div className={styles.container}>
      <div
        className={styles.countdown}
        style={{
          background: `url(${countdownbackground})`,
          backgroundSize: "cover",
          width: "190px",
          height: "190px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className={styles.timerText}
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            paddingTop: "10px",
            marginBottom: "10px",
            marginLeft: "7px",
          }}
        >
          Timer
        </div>
            
        <div style={{marginBottom:"40px",marginLeft: "7px",  }}>
          {countdownHours < 10 ? "0" + countdownHours : countdownHours} :{" "}
          {countdownMinutes < 10 ? "0" + countdownMinutes : countdownMinutes} :{" "}
          {countdownSeconds < 10 ? "0" + countdownSeconds : countdownSeconds}
        </div>
      </div>
      <div className={styles.timerSetter}>
        <div
          className={styles.timerSetterContainer}
          style={{
            color: "white",
            display: "flex",
            fontSize: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className={styles.hourSetter}
            style={{ textAlign: "center", padding: "6px" }}
          >
            <p className={styles.heading}> Hours</p>
            <img src={up} alt="" onClick={() => handleIncrement("hours")} />
            <p className={styles.oo}>{hours < 10 ? "0" + hours : hours}</p>
            <img src={down} alt="" onClick={() => handleDecrement("hours")} />
          </div>
          <div className={styles.divider}>:</div>
          <div
            className={styles.minuteSetter}
            style={{ textAlign: "center", padding: "6px" }}
          >
            <p className={styles.heading}>Minutes</p>
            <img src={up} alt="" onClick={() => handleIncrement("minutes")} />
            <p className={styles.oo}>
              {minutes < 10 ? "0" + minutes : minutes}
            </p>
            <img src={down} alt="" onClick={() => handleDecrement("minutes")} />
          </div>
          <div className={styles.divider}>:</div>
          <div
            className={styles.secondSetter}
            style={{ textAlign: "center", padding: "6px" }}
          >
            <p className={styles.heading}>Seconds</p>
            <img src={up} alt="" onClick={() => handleIncrement("seconds")} />
            <p className={styles.oo}>
              {seconds < 10 ? "0" + seconds : seconds}
            </p>
            <img src={down} alt="" onClick={() => handleDecrement("seconds")} />
          </div>
        </div>
        <button className={styles.startBtn} onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Timer;
