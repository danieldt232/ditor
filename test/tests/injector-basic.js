const { Injector } = require('../../../ditor');

it( "Can be constructed", () => {
  var injector = new Injector();
  should(injector).be.an.Object();
} )

it( "Contains an .invoke() function", () => {
  var injector = new Injector();
  should(injector.invoke).be.a.Function();
} )

it( "Contains a .branch() function", () => {
  var injector = new Injector();
  should(injector.branch).be.a.Function();
} )
