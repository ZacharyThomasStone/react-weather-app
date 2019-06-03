import React from "react";
import {Col, Row} from "antd";
import {WeatherCard} from "./WeatherCard";

export function Home() {
    return <div style={{background: '#ECECEC', padding: '30px'}}>
        <Row gutter={10}>
            <Col span={2}>
                <WeatherCard
                    title={"Current Temp"}
                    value={"75"}
                    suffix={"°"}
                />

            </Col>
            <Col span={2}>
            <WeatherCard
                title={"Tuesday"}
                value={"5/21/2019"}

            />
            </Col>
        </Row>
    </div>
}
