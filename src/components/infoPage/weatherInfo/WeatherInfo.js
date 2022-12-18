import React, {useEffect} from 'react';
import styles from './WeatherInfo.module.scss'
import Navigation from "../../layouts/navigation/Navigation";
import OneDayInfo from "./oneDayInfo/OneDayInfo";
import {useNavigate} from "react-router-dom";

const WeatherInfo = ({forecast, city, fetchForecast, geolocation}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!!city) {
            fetchForecast(null, null, city)
        } else if (geolocation?.latitude) {
            fetchForecast(geolocation?.latitude, geolocation?.longitude, null)
        }

    }, [city, geolocation]);

    useEffect(() => {
        if (!city && !geolocation?.latitude) {
            navigate('/')
        }
    }, [city, geolocation]);

    return (
        <Navigation city={city} isForToday={false}>
            <ul className={styles.list}>
                {
                    (forecast ?? []).map((data, index) => {
                        return <li key={`index-${data.dt}`} className={styles.el}>
                            <OneDayInfo forecast={data}/>
                        </li>
                    })
                }
            </ul>
        </Navigation>
    );
};

export default WeatherInfo;
