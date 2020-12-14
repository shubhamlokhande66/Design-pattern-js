let ElectronicsEquip= require('./FactoryPatternBusinessLogic')

const Equipment = []

Equipment.push(ElectronicsEquip.create("Dell",60000, 1));
Equipment.push(ElectronicsEquip.create("Apple",40000, 2));
Equipment.push(ElectronicsEquip.create("Fastrack",10000, 3));

function print() {
    console.log("Equipment -" + this.type + ",   Name -" + this.name + ",  Price  -" + this.price);
}
Equipment.forEach(Info => {
    print.call(Info)
})