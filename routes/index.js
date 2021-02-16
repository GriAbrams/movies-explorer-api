const router = require('express').Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { createUserValidator, loginValidator } = require('../middlewares/routeValidators');
const { pageNotFound } = require('../utils/constants');

const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', createUserValidator, createUser);
router.post('/signin', loginValidator, login);

router.use('/', auth, usersRouter);
router.use('/', auth, moviesRouter);

router.all('*', () => {
  throw new NotFoundError(pageNotFound);
});

module.exports = router;
