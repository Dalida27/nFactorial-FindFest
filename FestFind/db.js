const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://dalida:dalida0208@cluster0.rhdyyex.mongodb.net/findfest'

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var connection = mongoose.connection

connection.on('error', () => {
  console.log("Fail not working")
})

connection.on('connected', () => {
  console.log("Successfully")
})

module.exports = mongoose