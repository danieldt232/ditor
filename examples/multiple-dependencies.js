const { Injector } = require('../.');

var a={x:1}, b={y:2};

var injector = new Injector({a,b});

var consumer = ($, {a, b}) => console.log(a, b);

injector.invoke(consumer);
