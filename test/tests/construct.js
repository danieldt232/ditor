const sinon = require('sinon');
require('should-sinon');
const { Injector } = require('../../../ditor');

it("Construct inner constructor", () => {
  var { construct } = new Injector();
  var Constructor = function(){this.x = 1}
  var res = construct(Constructor);
  should(res.x).equals(1);
})

it("Injects dependencies to inner constructor", () => {
  var { construct } = new Injector(1);
  var Constructor = function($,x){this.x = x}
  var res = construct(Constructor);
  should(res.x).equals(1);
})

it("Injects dependencies to inner class", () => {
  var { construct } = new Injector(1);
  class TestClass{
    constructor($, x){
      this.x = x;
    }
  }
  var res = construct(TestClass);
  should(res.x).equals(1);
})
