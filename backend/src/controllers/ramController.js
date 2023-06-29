const models = require("../models");

const getAllRams = (req, res) => {
  models.ram
    .findAll()
    .then(([rams]) => {
      res.status(200).send(rams);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllRams,
};
