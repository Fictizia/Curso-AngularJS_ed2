/* global QUnit */
QUnit.module( "module", {
    beforeEach: function( assert ) {
    assert.ok( true, "one extra assert per test" );
    }, afterEach: function( assert ) {
    assert.ok( true, "and one extra assert after each test" );
    }
});

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

document.getElementById('botonSubmit').addEventListener('click', function(e) {
    e.preventDefault();
    
    QUnit.test( "datos", function( assert ) {
        var miNombre = document.getElementById('nombre').value; 
        var miEdad = document.getElementById('edad').value;
    
        assert.ok(miEdad != '', "El nombre está cumplimentado" );
        assert.ok( Number(miEdad) > 18, "Es mayor de 18" );
    }); 
});

