import React from "react";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import Input from "./components/input";
import Button from "./components/Button";
import { useWeather } from "./Context/weather";
const App = () => {
  const weather=useWeather();
  useEffect(()=>{
    weather.fetchCurrentUserLocationData();
  },[])
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search"/>
      <Card />
      <Button value="Refresh"/>
    </div>
  );
};

export default App;
