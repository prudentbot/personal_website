var express = require('express');
var path = require('path');
var router = express.Router();

var tweets = [
  {
    text:"Hello, words!",
    time:1436046670
  },
  {
    text:"tweet 2",
    time:1436048315
  }
]

router.use('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', function(req, res) {
  res.sendFile(path.resolve("me.json"));
});

/* GET users listing. */
router.get('/twitter', function(req, res) {
  res.send(tweets);
});

module.exports = router;
