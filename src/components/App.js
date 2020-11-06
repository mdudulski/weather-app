import React, {Component} from 'react';
import Form from './Form';
import Result from "./Result";
import './App.css';

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
        err: "",


    }


    handleInputChange = (e) => {
        this.setState({
            value: e.target.value

        })

    }

    handleCitySubmit = (e) => {
        e.preventDefault()
        console.log("potwierdzony formularz");
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=5856ea1d1ec6a9c0d6fac72713db6eb5`;
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error('Nie udało się')
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div className="App">
                <Form
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}

                />
                <Result/>
            </div>
        );
    }
}

export default App;
