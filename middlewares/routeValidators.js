const { celebrate, Joi, CelebrateError } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);
const validator = require('validator');
const { notValidUrl } = require('../utils/constants');

const urlValidator = (url) => {
  if (!validator.isURL(url)) {
    throw new CelebrateError(notValidUrl);
  }
  return url;
};

const createUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().regex(/^\S+$/),
  }),
});

const loginValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().regex(/^\S+$/),
  }),
});

const updateUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const createMovieValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(urlValidator),
    trailer: Joi.string().required().custom(urlValidator),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().custom(urlValidator),
    movieId: Joi.number().required(),
  }),
});

const deleteMovieValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi.objectId().required(),
  }),
});

module.exports = {
  createUserValidator,
  loginValidator,
  updateUserValidator,
  createMovieValidator,
  deleteMovieValidator,
};
