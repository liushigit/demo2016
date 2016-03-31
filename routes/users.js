'use strict'

var express = require('express')
var router = express.Router()
var User = require('../models/user')

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.find().exec((err, docs)=> {
    if (err) {
      next(err)
    }

    res.render('account/list', {
      'docs': docs
    })
  })
});

router.get('/new', (req, res, next) => {
  res.render('account/new')
})

router.get('/login', (req, res, next) => {
  //...
})

router.post('/login', (req, res, next) => {
  //...
})

const REGISTER_URL = '/users/new'
const SUCCESS_URL = '/users/'

router.post('/create', (req, res, next) => {
  const username = req.body['username'].trim()
  const password = req.body['password']

  let redirectURL = REGISTER_URL

  //TODO: hash the password first
  let user = new User({'username': username,
                       'password': password})

  user.save((err) => {
      //TODO: log error...
      console.log(err)
      if (err) {
          // error_found = true;
          if (err.errors.username) {
            console.log("user save error")
            //TODO: handle error
              // req.flash('username',
              //           err.errors.username.message);
          }
      } else {
          redirectURL = SUCCESS_URL
      }

      res.redirect(redirectURL)
    })
})

module.exports = router
