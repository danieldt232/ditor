const { Injector } = require('../.');

var dep1=1, dep2=2, dep3=3, dep4=4, dep5=5, dep6=6;

// without injector

var f1 = (dep1, dep2, dep3, dep4, dep5, dep6) => f2(dep1, dep2, dep3, dep4, dep5, dep6);
var f2 = (dep1, dep2, dep3, dep4, dep5, dep6) => f3(dep1, dep2, dep3, dep4, dep5, dep6);
var f3 = (dep1, dep2, dep3, dep4, dep5, dep6) => f4(dep1, dep2, dep3, dep4, dep5, dep6);
var f4 = (dep1, dep2, dep3, dep4, dep5, dep6) => f5(dep1, dep2, dep3, dep4, dep5, dep6);
var f5 = (dep1, dep2, dep3, dep4, dep5, dep6) => console.log(dep1, dep2, dep3, dep4, dep5, dep6);

f1(dep1, dep2, dep3, dep4, dep5, dep6)

// with injector

var f1 = ($) => $.invoke(f2);
var f2 = ($) => $.invoke(f3);
var f3 = ($) => $.invoke(f4);
var f4 = ($) => $.invoke(f5);
var f5 = ($, dep1, dep2, dep3, dep4, dep5, dep6) => console.log(dep1, dep2, dep3, dep4, dep5, dep6);
var injector = new Injector(dep1, dep2, dep3, dep4, dep5, dep6);
injector.invoke(f1);
