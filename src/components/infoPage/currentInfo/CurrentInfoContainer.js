import { connect } from "react-redux"
import CurrentInfo from './CurrentInfo'

const mapStateToProps = state => {
  return {
    currentWeather: state?.mainPage?.currentInfo,
    city: state.mainPage.city
  }
}

const CurrentInfoContainer = connect(mapStateToProps, null)(CurrentInfo)

export default CurrentInfoContainer
