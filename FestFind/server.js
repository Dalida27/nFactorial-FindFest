const express = require('express');
const app = express();

const dbConfig = require('./db')
const eventsRoute = require('./routes/eventsRoute')
const usersRoute = require('./routes/userRoute')
const bookingsRoute = require('./routes/bookingsRoute')

app.use(express.json())

const PORT = 3001;

app.use('/api/events', eventsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 2", PORT);
})

