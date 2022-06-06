import React, { useEffect, useState } from 'react';
import WeatherInfo from './WeatherInfo';

export default function WeatherBackground() {
    const [search, setSearch] = useState("Sunshine Coast");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    //fetch open weather map
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f2c57bd87fa770fda286cc102ebd1710`)
            .then(resp => resp.json())
            .then(json => setData(json))
        // console.log(data)
    }, [search])

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
    }

    return (
        <div className="card text-white text-center border-0">
            <img src={`https://source.unsplash.com/600x900/?${search}`} className="card-img" alt="City pics from search input" />
            <div class="card-img-overlay">
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-4 w-75 mx-auto">
                        <input type="search" className="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2"
                            name="search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            required />
                        <button type="submit" className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                {
                    data.main ? (<WeatherInfo data={data} />) : (<div>Unknown city...please refresh browser!</div>)
                }
            </div>
        </div>

    )

};
