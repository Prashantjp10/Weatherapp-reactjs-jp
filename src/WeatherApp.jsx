import React from "react";
import search from "./assets/search.png";
import cloud from "./assets/cloud.png";
import clear from "./assets/clear.png";
import drizzle from "./assets/drizzle.png";
import humidity from "./assets/humidity.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import wind from "./assets/wind.png";

export const WeatherApp = () => {
   return (
      <div className="section">
         <div className="app-container">
            <div className="top-content">
               <input
                  type="text"
                  className="input-field"
                  placeholder="search"
               />
               <img src={search} alt="search-btn" className="search-icon" />
            </div>
            <div className="weather-img">
               <img src={cloud} />
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">location</div>
            <div className="data-container">
               <div className="elements">
                  <img src={humidity} alt="" className="icon" />
                  <div className="data">
                     <div className="percent">64%</div>
                     <div className="text">humidity</div>
                  </div>
               </div>
               <div className="elements">
                  <img src={wind} alt="" className="icon" />
                  <div className="data">
                     <div className="percent">19 km/h</div>
                     <div className="text">Wind-speed</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
