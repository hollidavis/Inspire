import ClockController from "./Controllers/ClockController.js";
import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import ToDoController from "./Controllers/ToDoController.js";
import WeatherController from "./Controllers/WeatherController.js";
class App {
  clockController = new ClockController();
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  toDoController = new ToDoController();
  weatherController = new WeatherController();
}

window["app"] = new App();
