'use strict'

var mongoose = require('../db')
var Schema = mongoose.Schema

var UserSchema = new Schema({
        username: {
            type: String,
            index: {
                unique: true
            },
            required: true,
            trim: true,
            match: /[\w\d]{6,20}/
        },
        password: {
            type: String,
            required: true
        }
    }, {
        autoIndex: false
    });

var User = mongoose.model('User', UserSchema)

module.exports = User;
