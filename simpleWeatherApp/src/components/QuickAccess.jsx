import React from 'react';

const QuickAccess = ({setQuery}) => {

    const cities = [
        {
            id:1,
            title:'London'
        },
        {
            id:2,
            title:'New York'
        },
        {
            id:3,
            title:'Tokyo'
        },
        {
            id:4,
            title:'Addis Ababa'
        },
        {
            id:5,
            title:'Paris'
        }
    ]
  return (
    <div className='flex md:flex-row flex-col items-center justify-around my-6'>
        {cities.map((city) =>(
            <button key={city.id} className='text-white text-lg font-medium'
            onClick={()=> setQuery({q: city.title})}>
                {city.title}</button>
        ))}
    </div>
  )
}

export default QuickAccess;