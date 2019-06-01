const { Injector } = require('../../.');
const config = require('./config');
const Logger = require('./logger');
const Posts = require('./posts');
const App = require('./app');

var injector = new Injector(config);
var logger = injector.construct(Logger);
var posts = injector.construct(Posts);
injector = new Injector({ config, logger, posts });
injector.construct(App);





return;
//
// var a = {x:1},
//   b = {y:2},
//   c = {z:3};
//
// var logger = {
//   info: msg => console.log("<info>", msg)
// }
// var config = {
//   port: 80,
//   serverHost: "http://myServer:8080"
// }
// var injector = new Injector({ logger, config });
//
// var app = ($,{logger, config}) => {
//   var appId = Math.random();
//   logger.info("app " +appId+ " is up on port:"+config.port)
//   var appInjector = $.branch(appId);
//   appInjector.invoke(functionality)(1);
// }
//
// var functionality = ($, {logger}, appId) => (param) => {
//   logger.info("functionality called with param: "+ param + " by app: "+ appId);
// }
//
// injector.invoke(app);
