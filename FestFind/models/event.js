const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({

  name:{
    type: String,
    required: true
  },
  place:{
    type: String,
    required: true
  },
  time:{
    type: String,
    required: true
  },
  available:{
    type: Number,
    required: true
  },
  cost:{
    type: Number,
    required: true
  },
  imageurls: [],
  currentbookings: [],
  type:{
    type: String,
    required: true   
  },
  description : {
    type: String,
    required: true
  }

}, {
  timestamps: true,
})

const eventModel = mongoose.model('events', eventSchema)

module.exports = eventModel