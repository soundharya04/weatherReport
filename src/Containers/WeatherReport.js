import React, { Component } from "react";
import axios from "axios";

const API_KEY = "4411ce3c496ff3b079ef3de96745265e";

class WeatherReport extends Component {
  state = {
    city: "",
    country: "",
    data: {},
    error: {},
    Comp: "",
  };

  getWeather = (e) => {
    e.preventDefault();

    var city = this.state.city;
    var country = this.state.country;
    var nametest = RegExp(
      /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/
    );

    if (!nametest.test(city) || !nametest.test(city)) {
      import("../Components/ErrorComp").then((res) => {
        this.setState({
          Comp: res.default,
          error: "Please enter valid City/Country Name",
        });
      });
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
        )
        .then((res) => {
          console.log(res.data);
          this.setState({
            data: res.data,
          });
          import("../Components/DispWeather").then((res) => {
            this.setState({
              Comp: res.default,
            });
          });
        })
        .catch((err) => {
          this.setState({
            error: err.response.data,
          });
          import("../Components/ErrorComp").then((res) => {
            this.setState({
              Comp: res.default,
            });
          });
        });
    }
  };
  render() {
    const { Comp } = this.state;
    return (
      <React.Fragment>
        <h3 className=" mt-4 text-center title">
          Let's find out today's weather{" "}
        </h3>
        <div className="container form-style mt-3">
          <form className="form-inline" onSubmit={this.getWeather}>
            <div className="form-group">
              <label htmlFor="city" className="mr-3">
                City:
              </label>
              <input
                type="text"
                className="form-control mr-3"
                value={this.state.city}
                required
                onChange={(e) => {
                  this.setState({
                    city: e.target.value,
                    data: "",
                    error: "",
                    Comp: "",
                  });
                }}
              />
            </div>
            <div class="form-group">
              <label htmlFor="country" className="mr-3">
                Country:
              </label>
              <input
                type="text"
                className="form-control mr-3"
                value={this.state.country}
                required
                onChange={(e) => {
                  this.setState({
                    country: e.target.value,
                    data: "",
                    error: "",
                    Comp: "",
                  });
                }}
              />
            </div>

            <button type="submit" className="btn herobutton">
              Get Weather
            </button>
          </form>
        </div>

        {this.state.Comp && (
          <Comp
            data={this.state.data}
            error={this.state.error}
            city={this.state.city}
          />
        )}
      </React.Fragment>
    );
  }
}
export default WeatherReport;
