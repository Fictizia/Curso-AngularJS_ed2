QUnit.module( "form test", {
  beforeEach: function() {
    console.log('beforeEach');
    assert.ok( document.getElementById('name').value != '' , "Passed!" );
  }, afterEach: function() {
    console.log('afterEach');
  }
});

QUnit.test( "first test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

function ejecutaTest(){
    QUnit.test( "second test", function( assert ) {
        assert.ok( document.getElementById('name').value != '' , "Passed!" );
        assert.ok( Number(document.getElementById('age').value) >= 18 , "Passed!" );
    });
}

document.getElementById('sForm').addEventListener('click', function(e) {
   e.preventDefault();
   ejecutaTest();
})

