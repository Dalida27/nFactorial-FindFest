import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Swal from 'sweetalert2';
import './Profilescreen.css';

const { TabPane } = Tabs;

function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div className='ml-3 mt-3'>
      <Tabs defaultActiveKey="1" className="tab-content">
        <TabPane tab="Профиль" key="1">
          <div className="profile-content">
            <h1>Мой Профиль</h1>
            <p className="headings">Имя: {user.name}</p>
            <p className="headings">Email: {user.email}</p>
            <p className="headings">Админ: {user.isAdmin ? 'Да' : 'Нет'}</p>
          </div>
        </TabPane>
        <TabPane tab="Ивенты" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profilescreen;





export function MyBookings() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [events, setEvents] = useState([]);
  const[bookings, setbookings] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.post('/api/bookings/getbookingsbyuserid', { userid: user._id });
        setEvents(response.data);
        setbookings(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };

    fetchEvents();
  }, []);

  async function cancelBooking(bookingid, eventid){
    try{
      setLoading(true)
      const result = await (await axios.post("/api/bookings/cancelbooking", {bookingid, eventid})).data
      console.log(result)
      setLoading(false)
      Swal.fire('Получилось', 'Ваша бронь на мероприятие была убрана', 'success').then(result => {
        window.location.reload()
      })
    }catch(error){
      console.log(error)
      setLoading(false)
      Swal.fire('Получилось', 'Ваша бронь на мероприятие была убрана', 'success').then(result => {
        window.location.reload()
      })
    }
  }

  function addEventToGoogleCalendar(booking) {
    axios.post('/api/calendar/addevent', { booking })
        .then(response => {
            Swal.fire('Success', 'Event added to Google Calendar', 'success');
        })
        .catch(error => {
            console.error('Error adding event to Google Calendar', error);
            Swal.fire('Error', 'Failed to add event to Google Calendar', 'error');
        });
}

  return (
    <div>
      <h1>Мои Ивенты</h1>
      <div className='row'>
        <div className='col-md-6'>
          {loading && (<Loader />)}
          {bookings && (bookings.map(booking => {
            return <div className='bs'>
              <h2>{booking.event}</h2>
              <p><b>Номер бронирования:</b> {booking._id}</p>
              <p><b>Транзакция:</b> {booking.transactionId}</p>
              <p><b>Общая сумма:</b> {booking.totalprice}</p>
              <p><b>Статус:</b> {booking.status === 'booked' ? 'Потвержден' : "Отклонен"}</p>

              <div className='text-right'>
                {booking.status!== 'cancelled' && (
                  <div className='text-right'>
                    <div>
                     {/* <button className='btn btn-primary' onClick={() => addEventToGoogleCalendar(booking)}>Добавить ивент в Google Calendar</button> */}
                    </div>
                    <button className='btn btn-primary mt-3' onClick={() => {cancelBooking(booking._id, booking.eventid)}}>Отменить бронирования</button>
                  </div>
                )}
              </div>
            </div>
          }))}
        </div>
      </div>
    </div>
  );
}
