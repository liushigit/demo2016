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
            match: /[\w\d]{2,20}/
        },
        password: {
            type: String,
            required: true
        }
    }, {
        autoIndex: false
    });


UserSchema.methods.validatePassword = function (pass) {
    return this.password == pass
}

UserSchema.statics.findById = function (id, cb) {
  return this.find({ _id: id }, cb);
}

// animalSchema.methods.findSimilarTypes = function (cb) {
//   return this.model('Animal').find({ type: this.type }, cb);
// }

var User = mongoose.model('User', UserSchema)

module.exports = User;
