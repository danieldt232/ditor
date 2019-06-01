class Logger{
  constructor($, config){
    // fill logger with .info(), .warn() ext by config
    for(let level of config.logLevels)
      this[level] = msg => this._log(level, msg)
  }
  _log(level, message){
    console.log(`<${level}>`, message);
  }
}

module.exports = Logger;
