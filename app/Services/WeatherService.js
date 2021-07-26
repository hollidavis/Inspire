import { ProxyState } from "../AppState.js";
import { weatherApi } from "./AxiosService.js";
import Weather from "../Models/Weather.js";
class WeatherService {
  async getWeather() {
    const res = await weatherApi.get()
    ProxyState.weather = new Weather(res.data)
  }

  toCelsius() {
    let temp = ProxyState.weather.temp
    let celsius = Math.ceil(temp - 273.15)
    ProxyState.celsius = celsius
    document.getElementById('temp').innerText = ProxyState.celsius.toString() + '° C'
  }

  toFahrenheit() {
    let temp = ProxyState.weather.temp
    let fahrenheit = Math.ceil((temp - 273.15) * 9 / 5 + 32)
    ProxyState.fahrenheit = fahrenheit
    document.getElementById('temp').innerText = ProxyState.fahrenheit.toString() + '° F'
  }

  convert() {
    if (ProxyState.converted == false) {
      this.toCelsius()
      ProxyState.converted = true
    } else {
      this.toFahrenheit()
      ProxyState.converted = false
    }
  }
}

export const weatherService = new WeatherService()