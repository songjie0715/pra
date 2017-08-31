var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
let multer = require('multer');
var upload = multer({dest: 'uploads/'});
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

    var filePath = req.file.path;
    var originFileName = req.file.originalname;
    console.log(req.file.originalname);

    fs.readFile(filePath, function(err,data){
        var timestamp = Date.now();
        var type = req.file.mimetype.split('/')[1];
        var poster = timestamp+'.'+type;

        var newPath = path.dirname('/public/uploads/');
        console.log(newPath);

        fs.writeFile(newPath, function(err){
            req.file.poster = poster;
            res.send({imgSrc: req.file.poster});
        })
    })

});

module.exports = router;
