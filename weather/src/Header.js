import {Link} from "react-router-dom";
import React from "react";
import {Button} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Icon from "antd/es/icon";

export function Header() {
    return (
      <ButtonGroup>
          <Button type="primary"><Link to="/"><Icon type="home" /> Home</Link></Button>
          <Button type="default"><Link to="/FiveDayForecast"><Icon type="calendar" theme="filled" /> Five Day Forecast</Link></Button>
          <Button type="default"><Link to="/WeatherSettings"><Icon type="setting" theme="filled" /> Weather Settings</Link></Button>
      </ButtonGroup>



    );
}
