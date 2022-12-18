import './App.css';
import { Route, Routes } from 'react-router-dom';
import InfoPage from './components/infoPage/InfoPage';
import MainPageContainer from './components/mainPage/MainPageContainer';
import WeatherInfoContainer from "./components/infoPage/weatherInfo/WeatherInfoContainer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<MainPageContainer/>}/>
        <Route exact path='/city' element={<InfoPage/>}/>
        <Route exact path='/info' element={<WeatherInfoContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
