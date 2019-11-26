const router = require('express').Router();
module.exports = router;

router.use('/data', require('./data'));
router.use('/food', require('./food'));
router.use('/recipe', require('./recipe'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
