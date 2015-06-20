/* global QUnit */

var gJSON_datos;

QUnit.module('FormModule',{
    beforeEach: function( assert ) {
        console.log('reseteo de datos');
        gJSON_datos = {
            name : 'David',
            age  : '16'
        }
    }, afterEach: function( assert ) {
        console.log('despues de cada test');
    }
});

var btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', function(event){
    event.preventDefault(); 
    QUnit.test( "FormTest", function( assert ) {
       assert.ok( document.getElementById('name').value != '' , "Passed!" );
       assert.ok( Number(document.getElementById('age').value) >= 18, 'Mayor de 18 años');
    });
});