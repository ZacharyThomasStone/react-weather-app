import React from "react";
import {WeatherCard} from "./WeatherCard";
import {Col, Row} from "antd";

export function FiveDayForecast() {
    return <div style={{background: '#ECECEC', padding: '30px'}}>
        <Row gutter={10}>
            <Col span={2}>
                <WeatherCard
                    title={"Monday"}
                    value={"5/20/19"}
                />
                <WeatherCard
                    title={"Tuesday"}
                    value={"5/21/2019"}

                />
            </Col>
            <Col span={2}>
                <WeatherCard
                    title={"High"}
                    value={"95"}
                    suffix={"°"}
                />
                <WeatherCard
                    title={"High"}
                    value={"93"}
                    suffix={"°"}
                />
            </Col>
            <Col span={2}>
                <WeatherCard
                    title={"Low"}
                    value={"55"}
                    suffix={"°"}
                />
                <WeatherCard
                    title={"Low"}
                    value={"68"}
                    suffix={"°"}
                />
            </Col>
        </Row>
    </div>

}
