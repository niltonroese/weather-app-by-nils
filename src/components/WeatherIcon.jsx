import React, { useMemo } from 'react'

export default function Icon({ weather }) {

    const iconSymbol = useMemo(() => {
        // console.log(weather);
        switch (weather) {
            case "Clouds":
                return "fa-cloud"
            case "Thunderstorm":
                return "fa-bolt";
            case "Drizzle":
                return "fa-cloud-rain";
            case "Rain":
                return "fa-cloud-showers-heavy";
            case "Snow":
                return "fa-snowflake";
            case "Clear":
                return "fa-sun";
            default:
                return "fa-smog";
        }
    }, [weather]);

    return (
        <i className={`fas ${iconSymbol} mb-2 fa-4x`}></i>
    )
}
