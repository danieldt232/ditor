module.exports = class Injector{
  constructor(...dependencies){
    this.dependencies = dependencies;
    this.invoke = this.invoke.bind(this);
    this.construct = this.construct.bind(this);
  }
  invoke(innerFunction){
    return innerFunction(this, ...this.dependencies);
  }
  construct(Ctor){
    return new Ctor(this, ...this.dependencies)
  }
  branch(...extraDependencies){
    return new Injector(...this.dependencies, ...extraDependencies);
  }
}
