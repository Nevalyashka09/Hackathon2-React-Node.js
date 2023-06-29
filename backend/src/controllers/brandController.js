const models = require("../models");

const getAllBrands = (req, res) => {
  models.brand
    .findAll()
    .then(([brands]) => {
      res.status(200).send(brands);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllBrands,
};
