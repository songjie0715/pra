var express = require('express');
var router = express.Router();
let multer = require('multer');
let querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createuser', function (req, res, next) {
  var data = ''
    console.log(req);
  req.on('data', function(chunk){
      data += chunk;
      const postData = querystring.parse(data);
      console.log(postData);
  })
  res.send({});
});

module.exports = router;
