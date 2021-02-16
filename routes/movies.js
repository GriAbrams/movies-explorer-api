const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { createMovieValidator, deleteMovieValidator } = require('../middlewares/routeValidators');

router.get('/movies', getMovies);

router.post('/movies', createMovieValidator, createMovie);

router.delete('/movies/:movieId', deleteMovieValidator, deleteMovie);

module.exports = router;
