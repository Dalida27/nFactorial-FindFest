import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Event.css';

function Event({ event }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isLoggedIn = () => {
        return localStorage.getItem('currentUser') !== null;
    };

    const handleBuyClick = (e) => {
        if (!isLoggedIn()) {
            alert('Извините, вы не вошли в систему.');
            e.preventDefault();
            return;
        }
        if (event.available === 0) {
            alert('Извините, свободных билетов не осталось');
            e.preventDefault();
        }
    };

    return (
        <div className='row pt-4 bs'>
            <div className='col-md-4'>
                <img src={event.imageurls[0]} className='smallimg' alt='main' />
            </div>
            <div className='col-md-7'>
                <p className='headings'>{event.name}</p>
                <p>{event.time}</p>
                <p><b>Расположение:</b> {event.place}</p>
                <p><b>Осталось мест:</b> {event.available}</p>
                <p><b>Цена:</b> от {event.cost}</p>

                <div style={{ float: 'right' }}>
                    <Link to={event.available > 0 ? `/book/${event._id}` : '#!'} onClick={handleBuyClick}>
                        <button className='btn btn-primary m-2' disabled={event.available === 0}>Купить</button>
                    </Link>
                    <button className='btn btn-primary' onClick={handleShow}>Детали</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{event.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {event.imageurls.map((url, index) => (
                            <Carousel.Item key={index}>
                                <img className='d-block w-100 bigimg' src={url} alt="carousel" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <p>{event.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Event;
