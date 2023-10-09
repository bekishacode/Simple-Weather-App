import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState('');

  const handleUnitsChange = (e) => {
    const selectedunit = e.currentTarget.name;
    if (units !== selectedunit) setUnits(selectedunit);
  };

  const handleSearchClick = () => {
    if (city !== '') {
      setQuery({ q: city });
    } else {
      // Inform the user about the error (empty city)
      toast.error('Please enter a city');
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching user location');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast.info('Location fetched');
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;

          setQuery({
            lat,
            lon,
          });
        },
      );
    } else {
      // Handle geolocation not supported
      toast.error('Geolocation is not supported');
    }
  };

  return (
    <div className="flex flex-col justify-center my-6">
      <div className="flex flex-1 flex-row w-4/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for a city.."
          className="text-xl font-montserrat rounded-full p-2 w-[400px] focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          onClick={handleSearchClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          onClick={handleLocationClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={handleUnitsChange}
          name="metric"
          className="text-xl text-white font-montserrat transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          onClick={handleUnitsChange}
          name="imperial"
          className="text-xl text-white font-montserrat transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;