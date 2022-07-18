const ItemsModel = require("../models/ItemsModel");

module.exports = (app) => {
  app.get("/api/items", (req, res) => {
    ItemsModel.find({})
      .sort({ id: 1 })
      .then((items) => {
        res.json(items);
      });
  });
};
