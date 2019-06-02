# DITOR
## Without Injector
![Without injector](https://cdn1.imggmi.com/uploads/2019/6/2/0a2c0510284b276cdf3322d48e360713-full.png)
## With Injector
![With injector](https://cdn1.imggmi.com/uploads/2019/6/2/41a3de492cff5c40f4ecc81dd65701fd-full.png)
## Branches
![With injector](https://cdn1.imggmi.com/uploads/2019/6/2/1e9e4a2227874769212f6f7496c1a9a9-full.png)


## Basic Usage
```javascript
const { Injector } = require('ditor');
var dependency = { x:1 };
var injector = new Injector(dependency);
var consumer = ($, dependency) => console.log(dependency);
injector.invoke(consumer);
```

## Multi-Dependencies
```javascript
var a={x:1}, b={y:2};
var injector = new Injector({a,b});
var consumer = ($, {a, b}) => console.log(a, b);
injector.invoke(consumer);
```

## nested-invoke
```javascript
var a={x:1}, b={y:2};
var injector = new Injector({a,b});
var consumer1 = ($, {a}) => console.log(a);
var consumer2 = ($, {b}) => {
  console.log(b);
  $.invoke(consumer1)
};
injector.invoke(consumer2);
```

## Code shorten
```javascript
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
```

## Branches
```javascript
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
```
