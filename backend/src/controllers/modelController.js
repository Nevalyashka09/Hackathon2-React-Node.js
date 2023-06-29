const models = require("../models");

const getAllModels = (req, res) => {
  models.model
    .getModels()
    .then(([model]) => {
      res.status(200).send(model);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllModels,
};
