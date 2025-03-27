import { useState } from 'react'
import * as weatherService from "./services/weatherService.js"
import './App.css'

const App = () => {
  const fetchData = async () => {
      const data = await weatherService.show("London");
      console.log("Data:", data);
  }
  return (
    <>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </>
  );
}

export default App

