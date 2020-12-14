class Laptop {
  constructor(name ,price) {
      this.name = name
      this.price=price;
      this.type = "Laptop"
  }
}
class Mobile {
  constructor(name,price) {
      this.name = name;
      this.price=price;
      this.type = "Mobile"
  }
}
class Watch{
  constructor(name,price) {
    this.price=price;
      this.name = name;
      this.type = "Watch"
  }
}
class ElectronicsCompo {
  create(name,price, type) {
      switch (type) {
          case 1:
              return new Laptop(name,price);
              break;
          case 2:
              return new Mobile(name,price);
              break;
          case 3:
              return new Watch(name,price);
              break;
          default:
              console.log("All this Component is Electronics");
              return null;
      }
  }

}

module.exports = new ElectronicsCompo;