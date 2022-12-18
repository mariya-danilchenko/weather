import React from 'react';
import styles from './OneDayInfo.module.scss';

const OneDayInfo = ({forecast}) => {
    if (!forecast) return <div>Not found</div>

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p>{new Date(forecast.dt_txt).toLocaleString()}</p>
                </div>
                <div className={styles.flex}>
                    <div>
                        <p>Temperature</p>
                        <p>{forecast.main.temp} °</p>
                    </div>
                    <div>
                        <p>Feels like</p>
                        <p>{forecast.main.feels_like} °</p>
                    </div>
                    <div>
                        <p>Wind</p>
                        <p>{forecast.wind.speed} m/s</p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default OneDayInfo;
