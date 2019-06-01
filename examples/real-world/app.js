const express = require('express');

class App{
  constructor($, { config, logger, posts }){
    const server = express();
    server.get("/", (req,res) => {
      res.send( posts.getAll() );
    })
    server.get("/new/:username/:post", (req,res) => {
      console.log("a");
      var session = { username: req.params.username }
      var injector = $.branch(session);
      injector.invoke(posts.newPost)(req.params.post);
      res.send("new post added");
    })
    server.listen(config.port,
      () => logger.info("App is over port: " + config.port));
  }
}

module.exports = App;
