import axios from 'axios';

// Klucz do api pamietac zeby update
const API_KEY = 'cafb9fbe040f436498e145137251401';
const BASE_URL = 'http://api.weatherapi.com/v1';

interface Condition {
  text: string;
}

interface CurrentWeather {
  temp_c: number;
  condition: Condition;
}

interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: Condition;
  };
}

interface WeatherData {
  location: {
    name: string;
  };
  current: CurrentWeather;
  forecast: {
    forecastday: ForecastDay[];
  };
}


export const getWeatherData = async (city: string): Promise<WeatherData | null> => {
  try {
    const { data: currentWeatherData } = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
        aqi: 'no',
        lang: 'pl',
      },
    });

    const { data: forecastData } = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days: 7,
        aqi: 'no',
        alerts: 'no',
        lang: 'pl',
      },
    });

    return {
      location: currentWeatherData.location,
      current: currentWeatherData.current,
      forecast: forecastData.forecast,
    };
  } catch (error) {
    console.error('error api,data fetching:', error);
    return null;
  }
};
