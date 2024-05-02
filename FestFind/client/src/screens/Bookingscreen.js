import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Bookingscreen.css';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Swal from 'sweetalert2'

function Bookingscreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [event, setEvent] = useState();
  const [numPeople, setNumPeople] = useState(1);

  const { eventid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post('/api/events/geteventbyid', { eventid });
        setEvent(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [eventid]);

  const totalPrice = event ? event.cost * numPeople : 0;

  async function bookRoom(){
    const bookingDetails = {
      event,
      userid: JSON.parse(localStorage.getItem('currentUser'))._id,
      totalprice: totalPrice 
    }

    try{
      const result = await axios.post('/api/bookings/bookevent', bookingDetails)
      Swal.fire('Получилось', 'Ваша бронь на мероприятие была поставлена, вы можете увидеть ее в вашем профиле', 'success').then(result => {
        window.location.reload()
      })
    }catch (error){
  
    }
  }

  return (
    <div className="bs m-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className='second'>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <h1>{event.name}</h1>
                <img src={event.imageurls[0]} className="bigimg" alt="event" />
              </div>
              <div className="col-md-5">
                  <div>
                    <p className='heading'>Детали Покупки</p>
                    <hr/>

                    <p><b>Имя: </b>{JSON.parse(localStorage.getItem('currentUser')).name}</p>
                    <p><b>Дата и время: </b> {event.time} </p>
                    <p><b>Место: </b> {event.place}</p>
                  </div>
                  <div>
                    <div>
                      <p className='heading'>Cумма</p>
                      <hr />
                      <p>Количество людей: {numPeople}</p>
                      <div>
                        <button className="btn btn-secondary mb-3" onClick={() => setNumPeople(numPeople + 1)}>+</button>
                        <button className="btn btn-secondary mb-3 minusbtn" onClick={() => setNumPeople(Math.max(numPeople - 1, 1))}>-</button>
                      </div>
                      <p>Цена одного билета: {event.cost}</p>
                      <p>Общая сумма: {totalPrice}</p>
                    </div>

                    <div>
                      <button className='btn btn-primary mt-3' onClick={bookRoom}>Купить сейчас</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Bookingscreen;