import './Weather.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import WeatherItem from './WeatherItem';
import SearchWeather from './SearchWeather';

export type WeatherItemData = {
    id_stacji: string;
    stacja: string;
    temperatura: string;
    cisnienie: string;
}

const Weather = () => {

    const [weatherData, setWeatherData] = useState<WeatherItemData[]>([]);
    const [filteredWeatherData, setFilteredWeatherData] = useState<WeatherItemData[]>([]);


    const getWeatherData = () => {
        axios.get<WeatherItemData[]>('https://danepubliczne.imgw.pl/api/data/synop')
            .then(res => {
                setWeatherData(res.data);
                setFilteredWeatherData(res.data);
            })
            .catch(error=>{
                console.error(error);
            })
    }

    const filterWeather = (searchValue: string) => {
        const filteredWeatherData = weatherData?.filter(weatherItem => weatherItem.stacja.toLowerCase().startsWith(searchValue.toLowerCase()));
        setFilteredWeatherData(filteredWeatherData)
    }

    useEffect(() => {
        getWeatherData();
    }, [])

    return (
        <div className="weather">
            <h1>Prognoza pogody</h1>
            <SearchWeather filterWeather={filterWeather}/>
            <div className='weatherList'>
                {filteredWeatherData ? filteredWeatherData.map((weatherItem)=>{
                    return <WeatherItem key={weatherItem.id_stacji} stacja={weatherItem.stacja} temperatura={weatherItem.temperatura} cisnienie={weatherItem.cisnienie}/>
                }) : null}
            </div>
        </div>
    )
}

export default Weather;