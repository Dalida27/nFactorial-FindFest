const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Event = require('../models/event')

router.post("/bookevent", async (req, res) => {
  const { event, userid, totalprice } = req.body;

  try {
    const newBooking = new Booking({
      event: event.name,
      eventid: event._id,
      userid,
      totalprice,
      transactionId: '1234'
    });

    const booking = await newBooking.save();

    const eventtemp = await Event.findOne({_id: event._id})

    eventtemp.currentbookings.push({bookingid: booking._id, userid: userid, status: booking.status});

    await eventtemp.save()

    res.send('Successfully booked!')

  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking" });
  }
});


router.post("/getbookingsbyuserid", async (req, res) => {
  console.log(req.body);
  const userid = req.body.userid;
  
  try {
    const bookings = await Booking.find({userid: userid});
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({error});
  }
});


router.post("/cancelbooking", async(req, res) => {

  const {bookingid, eventid} = req.body

  try{
    const bookingitem = await Booking.findOne({_id: bookingid})

    bookingitem.status = "cancelled"
    await bookingitem.save()

    const event = await Event.findOne({_id : eventid})

    const bookings = currentbookings

    const temp = bookings.filter(booking => booking.bookingid.toString()!==bookingid)
    event.currentbookings = temp

    await event.save()
    
    res.send('Your booking canceled successfully')

  }catch(error){
    return res.status(400).json({error});
  }
});

module.exports = router;
