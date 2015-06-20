function Factory() {
    this.createVehicle = function(type){
        var vehicle;
        
        if (type === "car") {
            vehicle = new Car();
        } else if (type === "bus") {
            vehicle = new Bus();
        } else if (type === "moto") {
            vehicle = new Moto();
        } else if (type === "airplane") {
            vehicle = new Airplane();
        }
        
        vehicle.type = type;
 
        vehicle.say = function () {
            log.add(this.type + ": rate " + this.velocity + "/hour");
        }
 
        return vehicle;

    }
}

var Car = function () {
    this.velocity = "120";
};
 
var Bus = function () {
    this.velocity = "100";
};
 
var Moto = function () {
    this.velocity = "120";
};
 
var Airplane = function () {
    this.velocity = "300";
};

// log helper
var log = (function () {
    var log = "";
 
    return {
        add  : function (msg) { log += msg + "\n"; },
        show : function () { alert(log); log = ""; }
    }
})();

function run(){
    var vehicles = [],
        factory  = new Factory();
        
        
    vehicles.push(factory.createVehicle("car"));
    vehicles.push(factory.createVehicle("bus"));
    vehicles.push(factory.createVehicle("moto"));
    vehicles.push(factory.createVehicle("airplane"));

    for (var i = 0, len = vehicles.length; i < len; i++) {
        vehicles[i].say();
    }
 
    log.show();
}