const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { updateUserValidator } = require('../middlewares/routeValidators');

router.get('/users/me', getUser);

router.patch('/users/me', updateUserValidator, updateUser);

module.exports = router;
