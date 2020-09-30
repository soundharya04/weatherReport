import React, { Fragment } from "react";
import WeatherReport from "./Containers/WeatherReport";
import Title from "./Components/Title";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Title></Title>
      <WeatherReport />
    </Fragment>
  );
}

export default App;
