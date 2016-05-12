var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/help', function(req, res, next) {
  res.render('help/index', { title: 'Help' });
});

module.exports = router;
