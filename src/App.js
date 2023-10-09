//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import {Footer, Forecast, Inputs, Navbar, TemperatureAndDetails, TimeAndLocation, QuickAccess} from './components/index';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './style';

function App() {

const [query, setQuery] = useState({q: 'berlin'});
const [units, setUnits] = useState('metric');
const [weather, setWeather] = useState(null)

useEffect(() => {
  const fetchWeather = async () => {
    try {
      //const message = query.q ? query.q : 'current location';
      //toast.info('Fetching weather for ' + message);

      const data = await getFormattedWeatherData({ ...query, units });
      //toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`);
      setWeather(data);
    } catch (error) {
      const message = query.q ? query.q : 'current location';
      console.error('Error:', error);
      toast.error('Failed to fetch weather data for ' + message + ', please check the city name.');
    }
  };

  fetchWeather();
}, [query, units]);


const formatBackground = () =>{
  if(!weather) return 'from-cyan-700 to-blue-700'
  const threshold = units === 'metric' ? 20 : 60
  if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

  return 'from-yellow-700 to-orange-700'
}
  return (
    <div className='bg-sky-700 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      </div>

      <div className={`py-5 px-12 bg-gradient-to-br from-cyan-700 to-blue-700 
     shadow-xl border-t-[1px] border-stone-400 ${formatBackground()}`}>
           <QuickAccess setQuery={setQuery}/>
           <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weather && (
          <div>
           <TimeAndLocation weather={weather}/>
           <TemperatureAndDetails weather={weather}/>
           <Forecast title='hourly forecast' items={weather.hourly}/>
           <Forecast title='daily forecast' items={weather.daily}/>
          </div>
      )}
            <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
      </div>

      <div className={`bg-blue-950 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
     
    </div>
  );
}
export default App;
