function FactoryVehiculos() {
    this.createVehiculo = function (type) {
        var vehiculo;
 
        if (type === "camion") {
            vehiculo = new Camion();
        } else if (type === "coche") {
            vehiculo = new Coche();
        } else if (type === "moto") {
            vehiculo = new Moto();
        } else if (type === "bicicleta") {
            vehiculo = new Bicicleta();
        }
 
        vehiculo.type = type;
 
        vehiculo.say = function () {
            log.add(this.type + ": altura - " + this.altura + " metros");
        }
 
        return vehiculo;
    }
}
 
var Camion = function () {
    this.altura = "1.70";
};
 
var Coche = function () {
    this.altura = "1.60";
};
 
var Moto = function () {
    this.altura = "1.50";
};
 
var Bicicleta = function () {
    this.altura = "1.40";
};
 
// log helper
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var vehiculos = [];
    var myFactory = new FactoryVehiculos();
 
    vehiculos.push(myFactory.createVehiculo("camion"));
    vehiculos.push(myFactory.createVehiculo("coche"));
    vehiculos.push(myFactory.createVehiculo("moto"));
    vehiculos.push(myFactory.createVehiculo("bicicleta"));
    
    for (var i = 0, len = vehiculos.length; i < len; i++) {
        vehiculos[i].say();
    }
 
    log.show();
}

// run();