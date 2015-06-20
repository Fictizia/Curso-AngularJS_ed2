function Factory() {
    this.getVehicle = function (type) {
        var vehicle;
 
        if (type === "car") {
            vehicle = new vCar();
        } else if (type === "bus") {
            vehicle = new vBus();
        } else if (type === "motorcycle") {
            vehicle = new vMoto();
        }
 
        return vehicle;
    }
}

var vCar = function () {
    this.height = "250";
    this.color = "red";
};

var vBus = function () {
    this.height = "650";
    this.color = "white";
};

var vMoto = function () {
    this.height = "75";
    this.color = "white";
};

function run() {
    var vehicles = [];
    var factory = new Factory();
 
    vehicles.push(factory.getVehicle("car"));
    vehicles.push(factory.getVehicle("bus"));
    vehicles.push(factory.getVehicle("motorcycle"));
    
    console.log(vehicles);

}

run();