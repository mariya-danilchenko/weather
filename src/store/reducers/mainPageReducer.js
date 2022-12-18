const defaultState = {
  listCity: [],
  ChangeCity: '',
  city: '',
  currentInfo:{
    name:'',
    temp:'',
    wind:'',
    main:'',
    humidity:'',
    pressure:'',
    icon:''
  },
  forecast: [],
  geolocation: null
}

const mainPageReducer = (state = defaultState, action) => {
  let stateCopy = {...state}
  switch(action.type){
    case 'addList':
      stateCopy.listCity = [...action.arr]
      return stateCopy
    case 'ChangeCity':
      stateCopy.ChangeCity = action.text
      stateCopy.city = stateCopy.ChangeCity
      return stateCopy
    case 'CurrentWeather':
      stateCopy.currentInfo = {...action.currentInfo}
      return stateCopy
    case 'SetForecast':
      stateCopy.forecast = action.CurrentInfo?.list ?? []
      return stateCopy
    case 'SetGeolocation':
      stateCopy.geolocation = {
        latitude: action.value.latitude,
        longitude: action.value.longitude
      }
      return stateCopy
    default:
      return state
  }
}

export default mainPageReducer
