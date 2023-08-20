import React, { useEffect, useState } from "react";
import styles from "./weather.module.css";
import wind from "../../assets/images/wind.png";
import pressure from "../../assets/images/pressure.png";
import humidity from "../../assets/images/humidity.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Replace with your API call
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=bc0e27ed2e4e4bf3812162314232008&q=new%20delhi&aqi=no"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });

    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear().toString().substr(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.dateAndTime}>
        <div className={styles.date}>{formatDate(currentDateTime)}</div>
        <div className={styles.time}>
          {currentDateTime.toLocaleTimeString()}
        </div>
      </div>
      {weatherData && (
        <div className={styles.weatherContainer}>
          <div className={styles.weatherCondition}>
            <img
              src={`http:${weatherData.current.condition.icon}`}
              alt={weatherData.current.condition.text}
              className={styles.weatherIcon}
            />
            <p className={styles.weatherConditionText}>
              {weatherData.current.condition.text}
            </p>
          </div>
          <hr />
          <div className={styles.weatherInfo}>
            <p className={styles.temperature}>
              {weatherData.current.temp_c}{" "}
              <span className={styles.temperatureUnit}>C</span>
            </p>
            <p className={styles.info}>
            <img
              src={pressure}
              alt=""
              className={`${styles.pressureIcon} ${styles.iconMargin}`}
            />
              Pressure <br />
              {weatherData.current.pressure_mb} mb
            </p>
          </div>
          <hr />
          <div className={styles.weatherInfo2}>
            <p className={styles.info}>
            <img
              src={wind}
              alt=""
              className={`${styles.windIcon} ${styles.iconMargin}`}
            />
              {weatherData.current.wind_kph} kph
              <br />
              Wind
            </p>
            <p className={styles.info}>
            <img
              src={humidity}
              alt=""
              className={`${styles.humidityIcon} ${styles.iconMargin}`}
            />
              {weatherData.current.humidity}% <br />
              Humidity
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
