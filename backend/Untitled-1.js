class car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCar() {
    return this.make + " " + this.model + " " + this.year;
  }

  getMake() {
    return this.make;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setYear(year) {
    this.year = year;
  }

  start() {
    return "Vroom!";
  }

  accelerate() {
    return "Zoom zoom!";
  }

  brake() {
    return "Brake!";
  }

  stop() {
    return "Stop!";
  }
}

function createCar(make, model, year) {
  return new car(make, model, year);
}
const newCar = createCar("Citroen", "C5", "essence");

console.log(newCar.getCar());
console.log("test");
