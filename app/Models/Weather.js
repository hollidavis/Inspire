export default class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.description = data.weather[0].main
    this.icon = data.weather[0].icon
  }

  get Template() {
    return /*html*/`
    <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="${this.description}">
    <div class = "mr-4 cursor" onclick = "app.weatherController.convert()">
        <p class = "m-0"><span id = "temp"></span></p>
        <p class = "m-0">${this.description}</p>
    </div>`
  }
}