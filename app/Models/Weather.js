export default class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.description = data.weather[0].main
    this.icon = data.weather[0].icon
  }

  get Template() {
    return /*html*/`
    <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="${this.description}">
    <div>
        <p id = "temp"></p>
        <p>${this.description}</p>
    </div>`
  }
}