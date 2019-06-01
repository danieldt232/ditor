const { Injector } = require('../.');
var dependency = { x:1 };

var injector = new Injector(dependency);

var consumer = ($, dependency) => console.log(dependency);

injector.invoke(consumer);
