import React from "react";
import { Statistic, Card} from 'antd';

export function WeatherCard(props) {
    return (
        <Card style={{marginTop:"10px"}}>
            <Statistic
                title={props.title}
                value={props.value}
                valueStyle={{ color: '#3f8600', fontSize: 18}}
                suffix={props.suffix}
            />
        </Card>


    );
}
