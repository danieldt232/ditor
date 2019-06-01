const sinon = require('sinon');
require('should-sinon');
const { Injector } = require('../../../ditor');

it("Invokes inner functions", () => {
  var { invoke } = new Injector();
  var callback = sinon.spy();
  invoke(callback);
  callback.should.be.calledOnce();
})

it("Passes injector (self) as first param", () => {
  var injector = new Injector();
  var callback = sinon.spy();
  injector.invoke(callback);
  callback.should.be.calledWith(injector);
})

it("Passes dependencies to inner function", () => {
  var dependency = {x:1};
  var callback = sinon.spy();
  var injector = new Injector(dependency);
  var { invoke } = injector;
  invoke(callback);
  callback.should.be.calledWith(injector, dependency);
})

it("Can pass 3 dependencies (and probably more)", () => {
  var a={x:1}, b={x:2}, c={x:3};
  var callback = sinon.spy();
  var injector = new Injector(a,b,c);
  var { invoke } = injector;
  invoke(callback);
  callback.should.be.calledWith(injector,a,b,c);
})
