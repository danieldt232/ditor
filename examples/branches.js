const { Injector } = require('../.');

var a={x:1}, b={y:2}, c={z:3};

var injector = new Injector({ a, b });

var main = ($,{a,b}) => {
  console.log(a,b);
  // c is not accessible here

  var innerInjector = injector.branch(c);
  innerInjector.invoke(inner);
}
var inner = ($, {a,b}, c) => {
  console.log(a,b,c);
}


injector.invoke(main);
