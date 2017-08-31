var fs = require('fs');
var express = require('express');
var router = express.Router();
let multer = require('multer');
var upload = multer({dest: 'upload/'});
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createuser', upload.array('myForm'), function (req, res, next) {
  console.log(req.body)
  res.send({});
});

router.post('/upload', upload.single('logo'), function(req, res, next){
  console.log(req.file);
  console.log('hahahah')
  res.send({ret_code: '0'})
});

module.exports = router;
