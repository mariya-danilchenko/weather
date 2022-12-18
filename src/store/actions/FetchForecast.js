import {type} from "@testing-library/user-event/dist/type";
import ChangeCity from "./ChangeCity";

const API_KEY = 'a1a648a02632b6759289e62c03cc416b'

const fetchForecast = (lat, lon, city) => {
  return async dispatch=>{
      try {
          let response

          if (!!lat && !!lon) {
              response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
          } else {
              response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
          }

          let json = await response.json()
          let body = {
              list: json.list ?? [],
          }

          dispatch(ChangeCity(json?.city?.name ?? 'City not found'))
          dispatch({type: 'SetForecast', CurrentInfo:body})
      } catch (e) {
          let body = {
              name: `not found`,   
          }
          dispatch({type: 'SetForecast', CurrentInfo:body})
      } 
  }
}
export default fetchForecast
