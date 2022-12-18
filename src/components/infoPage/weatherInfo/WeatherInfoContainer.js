import { connect } from "react-redux"
import WeatherInfo from "./WeatherInfo";
import fetchForecast from "../../../store/actions/FetchForecast";

const mapStateToProps = state => {
  return {
    forecast: state.mainPage.forecast,
    city: state.mainPage.city,
    geolocation: state.mainPage.geolocation,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchForecast: (lat, lon, city = null) => {
      dispatch(fetchForecast(lat, lon, city))
    }
  }
}

const WeatherInfoContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherInfo)

export default WeatherInfoContainer
