const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  event:{
    type: String,
    required: true
  },
  eventid:{
    type: String,
    required: true
  },
  userid:{
    type: String,
    required: true
  },
  totalprice:{
    type: Number,
    required: true
  },
  transactionId:{
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true,
    default: "booked"
  }
},{
  timestamps: true,
})

const bookingmodel = mongoose.model('bookings', bookingSchema);

module.exports = bookingmodel