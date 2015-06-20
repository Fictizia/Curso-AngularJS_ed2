/* global QUnit */

var gJSON_datos;

QUnit.module('modulo-formulario',
    {
        beforeEach: function (assert) {
            console.log('reseteo datos');
            gJSON_datos = {
                nombre: 'Alvaro',
                edad: 17
            };
        },
        afterEach: function (assert) {
            console.log('despues de cada prueba');
        }
    }
);

QUnit.skip( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "datos", function( assert ) {
    assert.ok( Number(gJSON_datos.edad) > 18, "Es mayor de 18" );
    assert.ok(gJSON_datos.nombre != '', 'Tiene nombre');
});

QUnit.moduleDone(function( details ) {
  console.log( "Finished running: ", details.name, "Failed/total: ", details.failed, details.total );
})

function ejecutaTests() {
    QUnit.test( "hello test", function( assert ) {
        assert.ok( 1 == "1", "Passed!" );
    });
}

document.getElementById('botonSubmit').addEventListener('click', function (evento){
    event.preventDefault();
    ejecutaTests();
});



