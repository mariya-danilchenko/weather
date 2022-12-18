import { connect } from "react-redux"
import ChangeCity from "../../store/actions/ChangeCity"
import MainPage from "./MainPage"
import fetchForecast from "../../store/actions/FetchForecast";
import SetGeolocation from "../../store/actions/SetGeolocation";

const mapStateToProps = state => {
  return{
    list: state.mainPage.listCity,
    city: state.mainPage.city
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCity: (text) => {
      dispatch(ChangeCity(text))
    },
    setGeolocation: (value) => {
      dispatch(SetGeolocation(value))
    },
    fetchForecast: (lat, lon, city = null) => {
      dispatch(fetchForecast(lat, lon, city))
    }
  }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer
