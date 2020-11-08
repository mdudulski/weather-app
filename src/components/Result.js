import React from 'react';
import './Result.css'

const Result = props => {
    const {
        date, city, sunrise, sunset, temp, pressure, wind, err,
    } = props.weather

    let content = null;

    if (!err && city) {


        const sunriseTime = new Date(sunrise*1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset*1000).toLocaleTimeString()

        content = (
            <>
                <h3> Wyniki wyszukiwania dla {city}  </h3>
                <h4> Dane dla dnia i godziny: {date}  </h4>
                <h4> Aktualna dane:  </h4>
                <h4> Temperatura: {temp} &#176;C </h4>
                <h4> Ciśnienie: {pressure} hPa  </h4>
                <h4> Wiatr: {wind}  m/s </h4>
                <h4> Wschód Słońca: {sunriseTime} </h4>
                <h4> Zachód Słońca: {sunsetTime} </h4>
            </>

        )


    }


    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    );

}

export default Result;