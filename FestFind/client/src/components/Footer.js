import React from 'react';
import './Footer.css';  // Make sure the path is correct

function Footer() {
  return (
    <div className='mainfooter'>
        <footer className="site-footer pt-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <p className="text-justify">Присоединяйтесь к тысячам довольных клиентов, которые уже оценили наш сервис. Наши удобные функции поиска и бронирования помогут вам организовать идеальный выходной. Начните своё приключение в мире развлечений с нами уже сегодня!</p>
                </div>
                <div className="col-xs-6 col-md-3">
                  <h6>Quick Links</h6>
                  <ul className="footer-links">
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/home">To events</a></li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
                  <a href="/home"> FindFest</a>.
                  </p>
                </div>
              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
