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

const getSmartphonesbyBrand = (req, res) => {
  const { brand } = req.query;

  models.smartphone
    .getSmartphonesByBrand(brand)
    .then((smartphones) => {
      res.status(200).send(smartphones);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getSmartphonesbyModel = (req, res) => {
  const { model } = req.query;

  models.smartphone
    .getSmartphonesByModel(model)
    .then((smartphones) => {
      res.status(200).send(smartphones[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllSmartphones,
  getSmartphonesbyBrand,
  getSmartphonesbyModel,
};
