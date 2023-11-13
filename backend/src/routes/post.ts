var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cardList', function(req, res, next) {
  res.send([1,2,3,4,5,6,7]);
});

router.get('/detail', function(req, res, next) {
  res.send('detail');
});

module.exports = router;
