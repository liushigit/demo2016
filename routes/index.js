"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Good' });
});

router.get('/calc', function(req, res, next) {
  let amount = parseInt(req.query.amount)
  if (isNaN(amount)) {
    return res.render('calc')
  }
  let result = amount * 8
  res.render('result', {'amount': amount,
                        'converted': result})
})


router.get('/diaries/new', function(req, res, next) {
  res.render('diaries_new')
})

router.post('/diaries/', function(req, res, next) {
  let title = req.body.title
  let text_body = req.body.text_body
  res.render('diaries_show', {
    'title': title,
    'text_body': text_body
  })
})

// router.get('/diaries/:id', function(req, res, next) {
//   res.render('diaries_new')
// })

module.exports = router;
