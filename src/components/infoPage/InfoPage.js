import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Navigation from '../layouts/navigation/Navigation';
import CurrentInfoContainer from './currentInfo/CurrentInfoContainer';
import {useNavigate} from "react-router-dom";

const InfoPage = () => {
  let navigate = useNavigate();

  let name = useSelector(state => {
    if (!state.mainPage?.city) {
      return ''
    } else {
      return state.mainPage.city
    }
  })

  useEffect(() => {
    if (!name) {
      navigate('/')
    }
  }, [name]);

  return (
    <Navigation city={name} isForToday={true}>
      <CurrentInfoContainer/>
    </Navigation>
  );
};

export default InfoPage;
