import React from 'react';
import { useWeather } from '../Context/weather';
const Input = () => {
    const weather=useWeather();
    console.log(weather);
    return (
       <input  className='input-field'placeholder='search here'value={weather.SearchCity} onChange={(e)=>weather.setSearchCity(e.target.value)}></input>
    );
};

export default Input;