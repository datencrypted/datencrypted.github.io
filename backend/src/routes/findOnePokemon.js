const ApiModel = require("../models/ApiModel");
// connect to mongodb and fetch one pokemon from url id
module.exports = (app) => {
  // app is an express instance
  app.get("/api/pokemon/:id", (req, res) => {
    ApiModel.find({ id: req.params.id })
      .then((pokemon) => {
        res.json(pokemon);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
