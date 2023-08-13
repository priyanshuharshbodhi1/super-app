import { useEffect, useState } from "react"

const Weather = ()=>{
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [weather, setWeather] = useState(false)
    const [userLocation, setUserLocation] = useState(null);

    // console.log(weather)
        const fetchWeather = async (location) => {
          await fetch(
            `http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=${location}&aqi=no`
          )
            .then(async (data) => await data.json())
            .then((data) => setWeather(data));
        };
    
        const getUserLocation = () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation(`${latitude},${longitude}`);
              },
              (error) => {
                console.error("Error getting user location:", error);
                setUserLocation("New Delhi"); // Fallback to New Delhi
              }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
            setUserLocation("New Delhi"); // Fallback to New Delhi
          }
        };
    
    
    useEffect(()=>{
        const date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })

    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })

    useEffect(() => {
        if (userLocation !== null) {
          fetchWeather(userLocation);
        }
      }, [userLocation]);


    return (
        <div style={{width:"30vw",minHeight:"20vh",background:'#101744',borderRadius:"12px", marginTop:"5px"}}>
            <div style={{height:"7vh", background:"#FF4ADE", borderRadius:"12px", color:"white",display:"flex", justifyContent:"space-evenly", alignItems:"center", fontSize:"1.7rem"}}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <div>
                {weather ?<div style={{display:"flex", color:"white", alignItems:"center", justifyContent:"space-evenly"}}> <div>
                    <img src={weather.current.condition.icon} style={{width:"30px",height:"30px"}}/>
                    <p>{weather.current.condition.text}</p>
                </div>
                <div>
                   <p style={{marginBottom:"12px", fontSize:"24px",marginTop:"10px"}}><span>{weather.current.temp_c}</span>C</p>
                    <p>{weather.current.pressure_mb} pressure</p>
                </div>
                <div>
                    <p style={{marginBottom:"12px", fontSize:"24px", marginTop:"10px"}}>{weather.current.wind_kph} wind</p>
                    <p>{weather.current.humidity} humidity</p>
                </div></div>:<></>}
            </div>
        </div>
    )
}

export default Weather
