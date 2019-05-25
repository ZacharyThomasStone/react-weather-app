import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home} from "./Home";
import {FiveDayForecast} from "./FiveDayForecast";
import {WeatherSettings} from "./WeatherSettings";
import {Header} from "./Header";

function App() {
    return (
        <Router>
            <div>
                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/FiveDayForecast" component={FiveDayForecast} />
                <Route path="/WeatherSettings" component={WeatherSettings} />
            </div>
        </Router>
    );
}


export default App;
