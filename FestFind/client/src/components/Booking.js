import React, { useState, useEffect } from 'react';
import './Booking.css';

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(10); // Initial ticket price

  useEffect(() => {
    // Load data from local storage on component mount
    const storedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const storedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (storedSeats) setSelectedSeats(storedSeats);
    if (storedMovieIndex) setTicketPrice(+storedMovieIndex);
  }, []);

  const handleSeatClick = (seatIndex) => {
    setSelectedSeats(prevSeats => {
      if (prevSeats.includes(seatIndex)) {
        return prevSeats.filter(seat => seat !== seatIndex);
      } else {
        return [...prevSeats, seatIndex];
      }
    });
  };

  const handleMovieChange = (e) => {
    setTicketPrice(+e.target.value);
    localStorage.setItem('selectedMovieIndex', e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  return (
    <div className="container">
      <div className="movie-container">
        <label>Pick a movie:</label>
        <select id="movie" value={ticketPrice} onChange={handleMovieChange}>
          <option value="10">Avengers: Endgame ($10)</option>
          <option value="12">Joker ($12)</option>
          <option value="8">Toy Story 4 ($8)</option>
          <option value="9">The Lion King ($9)</option>
        </select>
      </div>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="screen"></div>

      <div className="row">
        {[...Array(8).keys()].map(seatIndex => (
          <div
            key={seatIndex}
            className={`seat ${selectedSeats.includes(seatIndex) ? 'selected' : ''} ${seatIndex === 2 || seatIndex === 3 || seatIndex === 14 || seatIndex === 15 || seatIndex === 22 || seatIndex === 23 || seatIndex === 26 || seatIndex === 27 ? 'occupied' : ''}`}
            onClick={() => handleSeatClick(seatIndex)}
          ></div>
        ))}
      </div>

      <p className="text">
        You have selected <span id="count">{selectedSeats.length}</span> seats for a price of $<span id="total">{selectedSeats.length * ticketPrice}</span>
      </p>
    </div>
  );
};

export default Booking;
