import { ProxyState } from "../AppState.js";
import { weatherApi } from "./AxiosService.js";
import Weather from "../Models/Weather.js";
class WeatherService {
  async getWeather() {
    const res = await weatherApi.get()
    ProxyState.weather = new Weather(res.data)
    console.log(ProxyState.weather)
  }

  toCelsius(temp) {
    let celsius = Math.ceil(temp - 273.15)
    ProxyState.celsius = celsius
  }

  toFahrenheit() {

  }
}

export const weatherService = new WeatherService()