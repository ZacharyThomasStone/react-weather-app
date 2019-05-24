import {Link} from "react-router-dom";
import React from "react";

export function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/FiveDayForecast">Five Day Forecast</Link>
            </li>
            <li>
                <Link to="/WeatherSettings">Weather Settings</Link>
            </li>
        </ul>
    );
}
