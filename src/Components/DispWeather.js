import React, { Component } from "react";
import { ImageCard } from "./dispElements";
import i1 from "../Images/Temperature.jpg";
import i2 from "../Images/Humidity.jpg";
import i3 from "../Images/Pressure.jpg";
import i4 from "../Images/Wind.jpg";

class DispWeather extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="temp-area">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 text-center temp-title">
              <h1>Weather report : {this.props.city}</h1>
              <h2>Condition : {data.weather[0].description}</h2>
            </div>
          </div>
          <div className="container temp-list">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <ImageCard src={i1} title="Temperature">
                  {data.main.temp}
                </ImageCard>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <ImageCard src={i2} title="Humidity">
                  {data.main.humidity}
                </ImageCard>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <ImageCard src={i3} title="Pressure">
                  {data.main.pressure}
                </ImageCard>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <ImageCard src={i4} title="Wind">
                  {data.wind.speed}
                </ImageCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DispWeather;
