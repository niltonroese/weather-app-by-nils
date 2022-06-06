import React from 'react'
import moment from 'moment';
import Icon from './WeatherIcon';

export default function WeatherInfo({ data }) {

    const { name, main, weather } = data;
    const weatherMain = weather[0].main; //weatherIcon
    const L = <i className="fas fa-temperature-low mb-3"></i>
    const H = <i className="fas fa-temperature-high mb-3"></i>

    return (
        <div className="bg-dark bg-opacity-50 py-3">
            <h2 className="card-overlay bg-black bg-opacity-50 py-3">{name}</h2>
            <p className="card-text lead">{moment().format('LLLL')}
                <br />
            </p>
            <hr />
            <h1 className="fw-bolder mb-2">{Math.round(main.temp)}&deg;C</h1>
            <Icon weather={weatherMain} />
            <p className="lead fw-bolder mb-2">{weatherMain}</p>
            <p className="lead">{L}{Math.round(main.temp_min)}&deg;C &nbsp;&nbsp;{H}{Math.round(main.temp_max)}&deg;C</p>
        </div>

    )
}

