import React from 'react'
import './Aboutus.css';
import Footer from '../components/Footer';

function Aboutus() {
  return (
    <div>
      <div className='about-main'>
        <div className='about-hero'>
            <h1>О Нас</h1>
            <p>Добро пожаловать на наш сайт бронирования билетов, где каждое мероприятие становится доступным в один клик! У нас вы найдете широкий ассортимент мероприятий — от концертов и спектаклей до спортивных игр и фестивалей. Бронирование билетов ещё никогда не было таким простым: выберите интересующее событие, забронируйте места и оплатите онлайн без очередей. Мы гарантируем безопасность каждой транзакции и предоставляем только проверенную информацию о каждом мероприятии. Запланируйте свой следующий незабываемый вечер вместе с нами!</p>
            <div className='two'>
              <div className='three'>
                <img src="https://ticketon.kz/media/upload/47892u56103_ticketon-afisha-oyu-almaty-1.png" />
              </div>
              <div className='five'>
                <div className='four'>
                  <img src="https://ru.qaz365.kz/cache/imagine/1200/uploads/news/2023/09/16/65052898d78b6960359010.jpeg"/>
                  <img src = "https://cdn-kz.kursiv.media/wp-content/uploads/2023/09/6-7-1-1024x576.jpg"/>
                </div>
              </div>
            </div>
        </div>
      </div>
    <Footer />
    </div>
  )
}

export default Aboutus