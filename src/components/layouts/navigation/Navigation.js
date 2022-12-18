import React from 'react';
import styles from './Navigation.module.scss';
import {NavLink, useNavigate} from 'react-router-dom';

const Navigation = ({children, isForToday, click, city}) => {
    let navigate = useNavigate();

    return (
        <>
        <nav className={styles.navigation}>
            <div>
                <h1>{city}</h1>
                <div className={styles.wap}>
                    <NavLink to='/'><p>Change city</p></NavLink> 
                </div>
            </div>
           <p onClick={() => {
               isForToday ? navigate('/info') : navigate('/city')}
           }
              className={styles.text}>Weather on {isForToday === true ? '5 days' : 'today'}
           </p>
        </nav>
        {children}
        </>
    );
};

export default Navigation;


