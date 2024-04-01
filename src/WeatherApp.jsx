import React, { useState } from "react";
import search from "./assets/search.png";
import cloud from "./assets/cloud.png";
import clear from "./assets/clear.png";
import drizzle from "./assets/drizzle.png";
import hum from "./assets/hum.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import wind from "./assets/wind.png";

export const WeatherApp = () => {
   let api_Key = "58c6288b973f51f69eb21c0c162338d4";

   const [wicon, setWicon] = useState(cloud);

   const searchBox = async () => {
      const searchBtn = document.getElementsByClassName("input-field");
      if (searchBtn[0].value === "") {
         return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBtn[0].value}&units=metric&appid=${api_Key}`;
      let response = await fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("Wind-percent");
      const temp = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity + "%";
      wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
      temp[0].innerHTML = Math.floor(data.main.temp) + "°c";
      location[0].innerHTML = data.name;

      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
         setWicon(clear);
      } else if (
         data.weather[0].icon === "02d" ||
         data.weather[0].icon === "02n"
      ) {
         setWicon(clear);
      } else if (
         data.weather[0].icon === "03d" ||
         data.weather[0].icon === "03n"
      ) {
         setWicon(drizzle);
      } else if (
         data.weather[0].icon === "04d" ||
         data.weather[0].icon === "04n"
      ) {
         setWicon(drizzle);
      } else if (
         data.weather[0].icon === "09d" ||
         data.weather[0].icon === "09n"
      ) {
         setWicon(rain);
      } else if (
         data.weather[0].icon === "10d" ||
         data.weather[0].icon === "10n"
      ) {
         setWicon(rain);
      } else if (
         data.weather[0].icon === "13d" ||
         data.weather[0].icon === "13n"
      ) {
         setWicon(snow);
      } else {
         setWicon(clear);
      }
   };
   return (
      <div className="section">
         <div className="app-container">
            <div className="top-content">
               <input
                  type="text"
                  className="input-field"
                  placeholder="search"
               />
               <div
                  onClick={() => {
                     searchBox();
                  }}
               >
                  <img src={search} alt="search-btn" className="search-icon" />
               </div>
            </div>
            <div className="weather-img">
               <img src={wicon} />
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">location</div>
            <div className="data-container">
               <div className="elements">
                  <img src={hum} alt="" className="icon" />
                  <div className="data">
                     <div className="humidity-percent">64%</div>
                     <div className="text">humidity</div>
                  </div>
               </div>
               <div className="elements">
                  <img src={wind} alt="" className="icon" />
                  <div className="data">
                     <div className="Wind-percent">19 km/h</div>
                     <div className="text">Wind-speed</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
