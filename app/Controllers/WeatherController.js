import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

// function _drawWeather() {
//   document.getElementById('weather').innerHTML = ProxyState.weather.Template
// }
export default class WeatherController {
  constructor() {
    this.getWeather()
    // _drawWeather()
    this.toCelsius()
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
    }
  }

  toCelsius() {
    weatherService.toCelsius(308.96)
  }
}