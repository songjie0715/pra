var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createuser', function (req, res, next) {
  console.log(req.body.username, req.body.password);
  res.send({});
});

module.exports = router;
