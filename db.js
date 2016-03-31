"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo2016');

module.exports = mongoose;
