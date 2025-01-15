import { Link } from "react-router-dom";
import nubisoftLogo from "./assets/nubisoft.svg";
import './index.css'
function App() {
  return (
    <div className="flex justify-center flex-col gap-4 items-center">
      <div>
        <a href="https://nubisoft.io/" target="_blank">
          <img src={nubisoftLogo} className="" alt="Nubisoft logo" />
        </a>
      </div>
      <h1>NubiWeather</h1>
      <section>
        <h2>Here's your starting point.</h2>
        <h3>Good luck! :)</h3>
      </section>
      <section>
      <div className="mt-8">
        <Link to="/weather">
          <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200">
            Go to Weather
          </button>
        </Link>
      </div>
      </section>
    </div>
  );
  
}

export default App;
