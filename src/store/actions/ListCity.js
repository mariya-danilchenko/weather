const API_KEY = 'a1a648a02632b6759289e62c03cc416b'

const listCity = (text) => {
  return async dispatch=>{
      if (!text) return

      try {
          let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${API_KEY}`)
          let json = await response.json()
          let body = {
              name: json.name,
          }
    
          dispatch({type: 'currentWeather', CurrentInfo:body})
      } catch (e) {
          let body = {
              name: `not found`,   
          }
          dispatch({type: 'currentWeather', CurrentInfo:body})
      }
       
  }
}
export default listCity
