import React, {useEffect} from 'react';
import styles from './MainPage.module.scss'
import {useNavigate} from 'react-router-dom'
import pointerButton from './../../img/cursor/pointerWhite.png'
import {useDispatch} from 'react-redux';
import listCity from '../../store/actions/ListCity';
import {GeolocationService} from "../../services/geolocation";

const MainPage = ({list, changeCity, setGeolocation, city}) => {
  let navigate = useNavigate();
  let dispatch = useDispatch()

  let click = () => {
    if (city !== ""){
        navigate(`city`)
    }
  }

  useEffect(() => {
    dispatch(listCity())
  }, [])

  return (
    <form className={styles.main}>
        <label className={styles.title} htmlFor="city">City name:</label>
        <input className={styles.search}
               onChange={e => changeCity(e.target.value)}
               value={city ?? ''} type="text"
               list="city"/>

        <datalist id='city'>
          {list.map((el, i) => <option key={i} value={el}>{el}</option>)}
        </datalist>

        {
            !city ? <h4 className={styles.noCityTitle}>City not selected</h4> : <button
                type={'submit'}
                onClick={click}
                className={styles.searchBtn}>
                OK
            </button>
        }

        <button className={styles.gps}
            type={'button'}
            onClick={() => GeolocationService.getLocation(({ coords }) => {
                if (!coords?.latitude) {
                    alert('Impossible location')
                } else {
                    setGeolocation(coords)
                    changeCity(null)

                    navigate(`info`)
                }
            })}>
            <img src={pointerButton} alt='pointer'/>My location
        </button>

    </form>
  );
};

export default MainPage;



