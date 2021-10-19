import React from "react";
import restaurants from "../sample-restaurants";

class Landing extends React.Component {
  state = {
    display: false,
    title: "",
    url: "",
  };

  displayList = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };

  getTitle = restaurant => {
    const {title, url} = restaurant
    this.setState({title, url, display: false})
  }

  goToRestaraunt = () => {
    this.props.history.push(`/restaurant:${this.state.url}`)
  }

  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div
            onClick={this.displayList}
            className="restaurant_select_top-header font-effect-outline"
          >
            Выберите ресторан
          </div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>

        {this.state.display ? <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((r) => (
              <li 
              key={r.id}
              onClick={() => this.getTitle(r)}F
              >
                {r.title}
                </li>
            ))}
          </ul>
        </div> : ''}
        
        {this.state.title && !this.state.display ?
          (<button onClick={this.goToRestaraunt}>Перейти в ресторан</button>)
          : null
        }
      </div>
    );
  }
}

export default Landing;
