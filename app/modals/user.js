var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model(
  'User',
  new Schema({
    name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    mobile: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      default: null,
    },
    dob: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: null,
    },
  }, {
    timestamps: true,
    collection: 'User',
  })
);