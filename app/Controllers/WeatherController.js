import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

function _drawWeather() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}
export default class WeatherController {
  constructor() {
    ProxyState.on('weather', _drawWeather)
    ProxyState.on('weather', this.toFahrenheit)
    this.getWeather()
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
    }
  }

  toCelsius() {
    try {
      weatherService.toCelsius()
    } catch (error) {
      console.error(error)
    }
  }

  toFahrenheit() {
    try {
      weatherService.toFahrenheit()
    } catch (error) {
      console.error(error)
    }
  }

  convert() {
    try {
      weatherService.convert()
    } catch (error) {
      console.error(error)
    }
  }
}