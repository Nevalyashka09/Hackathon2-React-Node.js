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

const getAllByBrand = (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const brandId = req.params.brandId;
  models.model
    .getModelsByBrand(brandId)
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
  getAllByBrand,
};
