//! davaleba1

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  showCarInfo() {
    console.log(`${make},${model},${year}`);
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLvL) {
    super(make, model, year);
    this.batteryLvL = batteryLvL;
  }

  showCarInfo() {
    console.log(`${this.make},${this.model},${this.year},${this.batteryLvL}`);
  }
}

const car1 = new ElectricCar('toyota', 'prius', '2012', '90%');

car1.showCarInfo();

//!davaleba2

class Library {
  #author = '';
  #book = '';
  #year = '';
  #Library = [];

  addLibrary(author, book, year) {
    const books = {
      author,
      book,
      year,
      data: new Date().toISOString(),
    };
    this.#Library.push(books);
  }

  addBook(author, book, year) {
    this.#author = author;
    this.#book = book;
    this.#year = year;
    this.addLibrary(author, book, year);
  }

  removeBook(author, book, year) {
    this.#Library = this.#Library.filter(
      (item) =>
        !(item.author === author && item.book === book && item.year === year)
    );
  }

  listBooks() {
    console.log(this.#Library);
  }
}

const giorgisLibrary = new Library();

giorgisLibrary.addBook('George', 'Nineteen', 1948);
giorgisLibrary.listBooks();

const tvalpr = {
  author: 'George Orwell',
  book: 'Nineteen Eighty-Four',
  year: 1948,
};

//! davaleba3

class Employee {
  #oneHour = 80;
  #workedHour = 0;

  calculateSalary(workedHour) {
    this.#workedHour = this.#workedHour + workedHour;
    const salary = this.#workedHour * this.#oneHour;
    console.log(salary);
  }
}

const girogi = new Employee();

girogi.calculateSalary(2);
girogi.calculateSalary(2);
girogi.calculateSalary(8);

class ShoppingCart {
  #cart = [];
  #itemName = '';
  #price = '';
  #quantity = 1;

  addItem(itemName, price, quantity = 1) {
    const item = {
      itemName,
      price,
      quantity,
    };
    this.#cart.push(item);
    console.log(item);
  }

  deleteItem(itemName) {
    this.#cart = this.#cart.filter((item) => !(item.itemName === itemName));
  }

  updateItem(itemName, newQuantity) {
    for (let item of this.#cart) {
      if (item.itemName === itemName) {
        if (newQuantity !== undefined) item.quantity = newQuantity;
        return;
      }
    }
    console.log(item);
  }

  calculateTotal() {
    const total = this.#cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    console.log(total);
  }
}

const myCart = new ShoppingCart();

myCart.addItem('laptop', 200);
myCart.updateItem('laptop', 2);
myCart.calculateTotal();

class CarFactory {
  #allCar = [];

  addCar(model, price) {
    const randomYear = Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
    const car = {
      year: randomYear,
      model,
      price,
      data: new Date().toISOString(),
    };
    this.#allCar.push(car);
    console.log(car);
  }
  deleteCar(model, year, price) {
    this.#allCar = this.#allCar.filter(
      (item) =>
        !(item.model === model && item.year === year && item.price === price)
    );
  }
  updateCar(model, newPrice) {
    for (let item of this.#allCar) {
      if (item.model === model) {
        item.price = newPrice;
      }
    }
  }
  getAllCars() {
    console.log(this.#allCar);
  }
}

const myGarage = new CarFactory();

myGarage.addCar('toyota', 30000);
myGarage.addCar('BMw', 40000);
myGarage.updateCar('BMW', 2000);
myGarage.getAllCars();
