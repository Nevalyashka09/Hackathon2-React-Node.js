const models = require("../models");

const getAllSmartphones = (req, res) => {
  models.smartphone
    .findAll()
    .then(([smartphone]) => {
      res.status(200).send(smartphone);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllSmartphones,
};
