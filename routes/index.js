"use strict";

var express = require('express');
var router = express.Router();
var passport = require('passport')

router.post('/login', 
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
)

router.get('/login', (req, res, next) => {
    res.render('login')
})

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
