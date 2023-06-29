const models = require("../models");

const getAllStorages = (req, res) => {
  models.storage
    .findAll()
    .then(([storage]) => {
      res.status(200).send(storage);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllStorages,
};
