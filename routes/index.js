var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Story Recorder' });
});

router.get('/record', function(req, res, next) {

 res.sendFile('/javascripts/Recorder.html');
});

router.post('/saveRecording', function(req, res,next) {

});

module.exports = router;
