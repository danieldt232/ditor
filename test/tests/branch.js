const sinon = require('sinon');
require('should-sinon');
const { Injector } = require('../../../ditor');

it("Returns a new Inject", () => {
  var injector = new Injector();
  injector.branch();
  injector.should.be.an.instanceOf(Injector);
})

it("Branched injector should contains both original and extra dependencies", () => {
  var a = {x:1}, b = {x:2};
  var injector = new Injector(a);
  var branchedInjector = injector.branch(b);
  branchedInjector.dependencies.should.deepEqual([a,b]);
})

it("Supports 3 extra dependencies (and probably more)", () => {
  var a={x:1}, b={x:2}, c={x:3};
  var injector = new Injector();
  var branchedInjector = injector.branch(a,b,c);
  branchedInjector.dependencies.should.deepEqual([a,b,c]);
})
