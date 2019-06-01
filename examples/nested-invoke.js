const { Injector } = require('../.');

var a={x:1}, b={y:2};

var injector = new Injector({a,b});

var consumer1 = ($, {a}) => console.log(a);
var consumer2 = ($, {b}) => {
  console.log(b);
  $.invoke(consumer1)
};

injector.invoke(consumer2);
