import React from 'react';
import {UilTemperature, UilTear, UilWind, UilSun, UilSunset} from '@iconscout/react-unicons';
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';

const TemperatureAndDetails = ({weather: {details, icon, temp, temp_min, temp_max, sunrise, 
    sunset, speed, humidity,feels_like, timezone}}) => {
  return (
    <section id='AboutUs' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container' >
        

        <div className='flex flex-row items-center justify-between gap-4 text-white py-3 '>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                 <p>{details}</p>
            </div>
            <img src={iconUrlFromCode(icon)} alt="" className='w-20'/>
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>

                <div className='flex font-palanquin text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Real fell:
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex font-palanquin text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>

                <div className='flex font-palanquin text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
                </div>
     
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-monserrat'>Rise: <span className='font-palanquin ml-1'>{formatToLocalTime(sunrise,timezone,'hh:mm a')}</span></p>
            <p className='font-montserrat'>|</p>

            <UilSunset/>
            <p className='font-palanquin'>Set: <span className='font-montserrat ml-1'>{formatToLocalTime(sunset,timezone,'hh:mm a')}</span></p>
            <p className='font-palanquin'>|</p>

            <UilSun/>
            <p className='font-palanquin'>High: <span className='font-montserrat ml-1'>{`${temp_max.toFixed()}°`}</span></p>
            <p className='font-palanquin'>|</p>

            <UilSun/>
            <p className='foont-palanquin'>Low: <span className='font-montserrat ml-1'>{`${temp_min.toFixed()}°`}</span></p>
        </div>
    </section>
  )
}

export default TemperatureAndDetails;