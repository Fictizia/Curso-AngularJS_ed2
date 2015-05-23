angular
    .module('myApp.db', [])
    .constant('appDB', {
        cars : {
            color : 'red',
            model : 'seat panda'
        },
        {
            color : 'blue',
            model : 'mazda x3'
        },
        {
            color : 'green',
            model : 'fiat bravo'
        }
    }
  }])