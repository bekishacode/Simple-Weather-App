import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import styles from './style';
function App() {

const [query, setQuery] = useState({q: 'berlin'});
const [units, setUnits] = useState('metric');
const [weather, setWeather] = useState(null)

useEffect(()=>{
  const fetchWeather = async () =>{
    const message = query.q ? query.q : 'current location'

    toast.info('Fetching weather for ' + message);
    (await getFormattedWeatherData({...query,units}).then(
      (data) =>{
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`)
        setWeather(data);
      }
    ));
     
   };
   
   fetchWeather();
},[query,units]);

const formatBackground = () =>{
  if(!weather) return 'from-cyan-700 to-blue-700'
  const threshold = units === 'metric' ? 20 : 60
  if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

  return 'from-yellow-700 to-orange-700'
}

  return (
    <div className='bg-blue-600 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      </div>

      <div className={`bg-teal-50 w-full ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700
    h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
           <TopButtons setQuery={setQuery}/>
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
        </div>
      </div>

     <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>
     
    </div>
  );
}

export default App;
