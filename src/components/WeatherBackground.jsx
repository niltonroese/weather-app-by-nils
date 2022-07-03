import React, { useEffect, useState } from 'react';
import Form from './Form';
import WeatherInfo from './WeatherInfo';

export default function WeatherBackground() {
    const [search, setSearch] = useState("Sunshine Coast");
    const [data, setData] = useState([]);

    //fetch open weather map
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f2c57bd87fa770fda286cc102ebd1710`)
            .then(resp => resp.json())
            .then(json => setData(json))
        // console.log(data)
    }, [search])

    const handleSubmit = (value) => {
        setSearch(value);
    }

    return (
        <div className="card text-white text-center border-0">
            <img src={`https://source.unsplash.com/600x900/?${search}`} className="card-img" alt="City pics from search input" />
            <div class="card-img-overlay">
              <Form handleSubmit={handleSubmit} />
                {
                    data.main ? (<WeatherInfo data={data} />) : (<div>Unknown city...please refresh browser!</div>)
                }
            </div>
        </div>

    )

};
