require('should');

describe("Ditor - basic", () => require("./tests/basic"));
describe("Injector", () => {
  describe("Basic", () => require("./tests/injector-basic") );
  describe("invoke", () => require("./tests/invoke"));
  describe("branch", () => require("./tests/branch"));
});
