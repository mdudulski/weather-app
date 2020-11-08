import React, {Component} from 'react';
import Form from './Form';
import Result from "./Result";
import './App.css';



var CONFIG = require('./config.json');
const APIKey = CONFIG.APIKey



class App extends Component {


    state = {
        value: "",
        date: "",
        city: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        err: false,


    }


    handleInputChange = (e) => {
        this.setState({
            value: e.target.value

        })

    }
    componentDidMount() {
        console.log("zamontowany");

    }

    componentDidUpdate(prevProps, prevState) {

        if(this.state.value.length <=1) return



        if (prevState.value !== this.state.value) {
            const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
            fetch(API)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw Error('Nie udało się')
                })
                .then(response => response.json())
                .then(data => {
                    const time = new Date().toLocaleString()
                    this.setState(state => ({
                        err: false,
                        date: time,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        wind: data.wind.speed,
                        city: state.value,

                    }))
                })
                .catch(err => {
                    console.log(err);
                    this.setState(state => ({
                        err: true,
                        city: this.state.value
                    }))
                })


        }

    }

    render() {
        return (
            <div className="App">
                <Form
                    value={this.state.value}
                    change={this.handleInputChange}


                />
                <Result weather={this.state}/>
            </div>
        );
    }
}

export default App;
