import axios from 'axios';

// Klucz do api pamietac zeby update
const API_KEY = 'cafb9fbe040f436498e145137251401';

interface CurrentWeather {
  temp_c: number;
  condition: { text: string };
}

interface ForecastDay {
  date: string;
  day: { avgtemp_c: number; condition: { text: string } };
}

interface WeatherData {
  location: { name: string };
  current: CurrentWeather;
  forecast: { forecastday: ForecastDay[] };
}

export const getWeatherData = async (city: string): Promise<WeatherData | null> => {
  try {
    const currentWeatherResponse = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=pl`
    );
    const forecastResponse = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no&lang=pl`
    );

    return {
      location: currentWeatherResponse.data.location,
      current: currentWeatherResponse.data.current,
      forecast: forecastResponse.data.forecast,
    };
  } catch (error) {
    console.error('Fetch error :(', error);
    return null;
  }
};
