import React, { useEffect, useState } from 'react';
import { getWeatherData } from './weatherAPI';
import './index.css';


interface WeatherData {
  location: { name: string };
  current: { 
    temp_c: number; 
    condition: { 
      text: string; 
      icon?: string; 
    };
  };
  forecast: { 
    forecastday: { 
      date: string; 
      day: { 
        avgtemp_c: number; 
        condition: { text: string; icon?: string }; 
      } 
    }[]; 
  };
}


const WeatherApp: React.FC = () => {
  const [gliwiceWeather, setGliwiceWeather] = useState<WeatherData | null>(null);
  const [hamburgWeather, setHamburgWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCard, setActiveCard] = useState<string | null>(null);


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const gliwiceData = await getWeatherData('Gliwice');
        const hamburgData = await getWeatherData('Hamburg');

        setGliwiceWeather(gliwiceData);
        setHamburgWeather(hamburgData);
      } catch (error) {
        console.error("Fetching weather error :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const toggleForecast = (locationName: string) => {
    setActiveCard((prev) => (prev === locationName ? null : locationName));
  };

  const renderWeatherCard = (weatherData: WeatherData | null, locationName: string) => {
    if (!weatherData) return <p>Ładowanie...</p>;

    return (
      <div
        onClick={() => toggleForecast(locationName)}
        className="weather-card"
      >
        <h2 className="card-title">{weatherData.location.name}</h2>
        <p className="current-temp">Temperatura: {weatherData.current.temp_c}°C</p>
        <p className="current-condition">{weatherData.current.condition.text}</p>
        <img
          src={`https:${weatherData.current.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="current-condition-icon"
        />
      </div>
    );
  };

  const renderForecast = () => {
    const weatherData = activeCard === 'Gliwice' ? gliwiceWeather : hamburgWeather;
    if (!weatherData) return null;
  
    return (
      <div className="forecast-horizontal">
        {weatherData.forecast.forecastday.map((day, index) => (
          <div key={index} className="forecast-day w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <p className="forecast-date">{new Date(day.date).toLocaleDateString()}</p>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="forecast-icon mb-2" 
            />
            <p className="forecast-temp">{day.day.avgtemp_c}°C</p>
            <p className="forecast-condition">{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div className="weather-app">
      <div className="weather-cards-container">
        {renderWeatherCard(gliwiceWeather, "Gliwice")}
        {renderWeatherCard(hamburgWeather, "Hamburg")}
      </div>
      {activeCard && renderForecast()}
    </div>
  );
};



export default WeatherApp;