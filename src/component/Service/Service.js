import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
  const { image, des, name, id } = props.service;
  const path = `/serviceDetail/${id}`;
  return (
    <div className='col-md-4 mb-4'>
      <div
        className='card shadow ms-3 mb-4'
        style={{ width: '25rem', height: '30rem' }}
      >
        <img src={image} className='card-img-top h-75' alt='...' />
        <div className='card-body'>
          <h5 className='card-title service-title'>{name}</h5>
          <p className='card-text mb-4'>{des.slice(0, 60)}...</p>
          <button className='btn btn-primary'>
            <Link className='text-white text-decoration-none' to={path}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
