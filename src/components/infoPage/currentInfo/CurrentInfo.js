import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styles from './../currentInfo/CurrentInfo.module.scss';
import todayWeather from '../../../store/actions/TodayWeather';

const CurrentInfo = ({currentWeather, city}) => {
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(todayWeather(city))
    }, [])

    if(!currentWeather) {
        return <h3>{'Not found'}</h3>
    }

    return (
        <>
        <div className={styles.weather}>
            <p className={styles.title}>{currentWeather.main}</p>
                <div className={styles.wap}>
                    <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} alt='icon'/>
                    <p className={styles.value}>{currentWeather.temp}</p>
                </div>
        </div>
        <div className={styles.info}>
            <div className={styles.container}>
                <h3>Wind</h3>
                <p>{currentWeather.wind}</p>
            </div>
            <div className={styles.container}>
                <h3>Pressure</h3>
                <p>{currentWeather.pressure}</p>
            </div>
            <div className={styles.container}>
                <h3>Humidity</h3>
                <p>{currentWeather.humidity}</p>
            </div>
        </div>
        </>
    );
};

export default CurrentInfo;
