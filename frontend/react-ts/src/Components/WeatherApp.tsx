import React, { useEffect, useState } from 'react';
import { getWeatherData } from '../weatherAPI';
import '../index.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [activeCard, setActiveCard] = useState<string>("Gliwice");
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true); 
        const gliwiceData = await getWeatherData('Gliwice');
        const hamburgData = await getWeatherData('Hamburg');
        setGliwiceWeather(gliwiceData);
        setHamburgWeather(hamburgData);
      } catch (error) {
        console.error("Fetching weather error: ", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchWeather();
  }, []);

  const toggleForecast = (locationName: string) => {
    setActiveCard(locationName);
  };

  const renderWeatherCard = (weatherData: WeatherData | null, locationName: string) => {
    if (!weatherData) return <p>Ładowanie...</p>;

    const { location, current } = weatherData;
    const { temp_c, condition } = current;
    
    return (
      <div onClick={() => toggleForecast(locationName)} className="weather-card">
        <h2 className="card-title">{location.name}</h2>
        <p className="current-temp">{temp_c}°C</p>
        <p className="current-condition">{condition.text}</p>
        <img
          src={`https:${condition.icon}`}
          alt={condition.text}
          className="current-condition-icon"
        />
      </div>
    );
  };

  const renderForecast = () => {
    const weatherData = activeCard === "Gliwice" ? gliwiceWeather : hamburgWeather;
    if (!weatherData) return null;

    const sliderSettings = {
      accessibility: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    };

    return (
      <div className="forecast-carousel mt-8">
        <Slider {...sliderSettings}>
          {weatherData.forecast.forecastday.map((day, index) => {
            const { date, day: dayData } = day;
            const { avgtemp_c, condition } = dayData;
            return (
              <div key={index} className="forecast-day p-4 bg-white shadow-md rounded-lg text-center">
                <p className="forecast-date font-semibold text-gray-600">
                  {new Date(date).toLocaleDateString()}
                </p>
                <img
                  src={`https:${condition.icon}`}
                  alt={condition.text}
                  className="forecast-icon mb-4 mx-auto h-16 w-16"
                />
                <p className="forecast-temp text-xl font-bold text-gray-800">
                  {avgtemp_c}°C
                </p>
                <p className="forecast-condition text-gray-600">
                  {condition.text}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Ładowanie...</p>
      </div>
    );
  }

  return (
    <div className="weather-app">
      <div className="weather-cards-container">
        {renderWeatherCard(gliwiceWeather, "Gliwice")}
        {renderWeatherCard(hamburgWeather, "Hamburg")}
      </div>
      <section className="forecast-title text-center mt-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Pogoda na najbliższe 7 dni w <span className="text-blue-600">{activeCard}</span>
        </h2>
      </section>
      {renderForecast()}
    </div>
  );
};

export default WeatherApp;
