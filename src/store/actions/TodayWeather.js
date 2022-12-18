const API_KEY = 'a1a648a02632b6759289e62c03cc416b'

const todayWeather = (city) => {
  return async dispatch => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`)
      let json = await response.json()

      let body = {
          name: json.name,
          temp: `${Math.floor(json.main.temp)}°`,
          wind: `${json.wind.speed} m/s`,
          main: json.weather[0].description,
          humidity: `${json.main.humidity}%`,
          pressure: `${json.main.pressure} hPA`,
          icon: `${json.weather[0].icon}`
      }
      dispatch({type: 'CurrentWeather', currentInfo: body})
    } catch (e){
      let body = {
          name: `not found`,
          temp: `not found`,
          wind: `not found`,
          main: `not found`,
          humidity: `not found`,
          pressure: `not found`,
          icon: 'icon'
      }
      dispatch({type: 'CurrentWeather', currentInfo: body})
    }
  }
}

export default todayWeather
