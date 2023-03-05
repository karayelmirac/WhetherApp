import React from "react";
import { useWhether, WhetherProvider } from "../context/WhetherContext";
import "./styles.css";
function Main() {
  const { whetherApi } = useWhether();

  return (
    <div className="main">
      {whetherApi.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="title">{item.date}</div>
            <div className="condition">
                <div style={{textAlign:"center"}}>{item.day.condition.text}</div>
                
              <img
                src={item.day.condition.icon}
                alt={item.day.condition.text}
              />
            </div>
            <div className="avgvalue">
              <span>{item.day.maxtemp_c}°C </span>
              <span>{item.day.mintemp_c}°C</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
