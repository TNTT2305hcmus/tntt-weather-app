import { useState, useEffect } from 'react'
import {fetchWeatherDataByCity} from '../services/weatherService.js';
import useDebounce from '../hooks/useDebounce';
import WeatherCard from './WeatherCard';
import '../css/App.css';

function App() {
  const [inputCity, setInputCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounceCity = useDebounce(inputCity, 1000);

  // Call API
  useEffect(() => {
    if(!debounceCity.trim()){
      setWeather(null);
      setError(null);
      return;
    }

    const getWeather = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchWeatherDataByCity(debounceCity);
        setWeather(data);
      } catch (err){
        setWeather(null);
        setError('City not found');
      } finally {
        setIsLoading(false);
      }
    }

    getWeather();
  }, [debounceCity])

  const getWeatherClass = () => {
    if(!weather) {
      return 'default';
    } 

    const temp = weather.main.temp;
    if(temp < 10){
      return 'snow';
    } else if (temp >= 10 && temp <= 20){
      return 'rain';
    } else if (temp > 20){
      return 'clouds';
    } else {
      return 'clear';
    }
  }

  return (
    <div className={`app-container ${getWeatherClass()}`}>

      {/* TÌM KIẾM */}
      <div className="search-box">
        <i className='bx bx-map'></i>
        <input 
          type="text" 
          placeholder="Enter city's name..." 
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        {isLoading ? (
          <i className='bx bx-loader-alt bx-spin'></i>
        ) : (
          <i className='bx bx-search'></i>
        )}
      </div>
      
      {/* HIỂN THỊ LỖI */}
      {error && <div className="error-message">{error}</div>}

      {/* HIỂN THỊ WEATHER CARD (Chỉ hiện khi có dữ liệu) */}
      {weather && <WeatherCard weather={weather} />}

    </div>
  )
}

export default App
