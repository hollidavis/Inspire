import ClockController from "./Controllers/ClockController.js";
class App {
  clockController = new ClockController();
}

window["app"] = new App();
