import React from 'react'
import Forecast from './Forecast';
import TeperatureAndDetails from './TemperatureAndDetails';
const Weather = () => {
  return (
    <section id='AboutUs' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
        <div className='flex flex-1 flex-col'><Forecast/></div>
        <div className='flex flex-1 flex-col'><TeperatureAndDetails/></div>
    </section>
  )
}

export default Weather