import React, { useEffect, useState } from 'react';
import hero1 from '../../img/hero1.jpg';
import hero2 from '../../img/hero2.jpg';
import hero3 from '../../img/hero3.jpg';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {/* slider section */}

      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={hero1}
              className='d-block w-100'
              height='650px'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block '>
              <h3>Best Clinic Service</h3>
              <h5>
                NIC has developed the e-Hospital project with the vision to
                improve the delivery of healthcare services to the citizens
                across the country.
              </h5>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src={hero2}
              className='d-block w-100'
              height='650px'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h3>Digitization Equipments</h3>
              <h5>
                The e-Hospital application is the cloud-based Hospital
                Management Information System for digitization of internal
                workflows and processes of hospitals.
              </h5>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src={hero3}
              className='d-block w-100'
              height='650px'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h3>24/7 Service Available</h3>
              <h5>
                The e-Hospital system is a one-stop solution which helps in
                connecting patients, hospitals and doctors on a single digital
                platform.
              </h5>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      {/* free service */}
      <div className='container-fluid bg-service p-5 d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-3 free-service  me-3 ms-3 p-4 mt-3 bg-light rounded'>
            <div className='fr-icon'>
              <i className='fab fa-cc-amazon-pay'></i>
            </div>
            <div className='fr-text'>
              <h2>Online Payment</h2>
            </div>
          </div>
          <div className='col-md-3 free-service bg-light p-4 me-3 ms-3 mt-3 rounded '>
            <div className='fr-icon'>
              <i className='fas fa-user-clock'></i>
            </div>
            <div className='fr-text'>
              <h2>24hour Online Help</h2>
            </div>
          </div>
          <div className='col-md-3 free-service bg-light me-3 ms-3 p-4 mt-3 rounded'>
            <div className='fr-icon'>
              <i className='fas fa-ambulance'></i>
            </div>
            <div className='fr-text'>
              <h2>Emergency</h2>
            </div>
          </div>
        </div>
      </div>

      {/* about e-hospital */}

      <div className='container mt-5 mb-5'>
        <div className='row align-middle about-sec'>
          <div className='col-md-6'>
            <div className='about_image'>
              <img src={hero2} className='img-fluid' alt='' />
            </div>
          </div>
          <div className='col-md-6 text-start'>
            <h2 className='text-start ms-4 fw-bold mb-4'>About e-Hospital</h2>
            <p className='text-start ms-4'>
              we additionally paintings very closely with our community
              healthcare group who provide antenatal, postnatal and nursing
              services and different specialist provision inclusive of the
              quitters scheme.
            </p>
            <p className='text-start ms-4 mb-5'>
              This 24 month benefit covers all ranges of basic upkeep.
              Notwithstanding every one of the things included on the Full
              administration we cover things that are frequently suggested for
              substitution like clockwork.
            </p>
            <button className='btn btn-primary about-button ms-4'>
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}

      <div className='container'>
        <h2 className='text-primary text-center fw-bold mt-4 mb-4'>
          Our Services
        </h2>
        <div className='row'>
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
