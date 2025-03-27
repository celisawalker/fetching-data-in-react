import { useState } from 'react'
import * as weatherService from "./services/weatherService.js"
import WeatherSearch from './components/WeatherSearch/WeatherSearch.jsx'
import WeatherDetails from './components/WeatherDetails/WeatherDetails.jsx'
import './App.css'

const App = () => {
  const [weather, setWeather] = useState({})

  const fetchData = async (city) => {
      const data = await weatherService.show(city);
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text
      }
      setWeather(newWeatherState)
  }

  console.log("State:", weather)
  return (
    <>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails weather={weather} />
    </>
  );
}

export default App

