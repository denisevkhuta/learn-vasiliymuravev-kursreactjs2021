import React from "react";
import restaurants from "../sample-restaurants";

class Landing extends React.Component {
  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div className="restaurant_select_top-header">Выберите ресторан</div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>

        <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((r) => (
              <li key={r.id}>{r.title}</li>
            ))}
          </ul>
        </div>

        <button>Перейти в ресторан</button>
      </div>
    );
  }
}

export default Landing;