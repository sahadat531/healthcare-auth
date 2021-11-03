import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='container-fluid bg-footer p-5 mt-5 text-light'>
      <div className='row'>
        <div className='col-md-4'>
          <h2>About Us</h2>
          <p className='text-start ms-5'>
            eHospital is the Rockies is a 710-bed local medicinal focus in
            Loveland, Colo. with a full range of administrations and spend
            significant time in heart and injury mind.
          </p>
        </div>
        <div className='col-md-4'>
          <h3>Quick Link</h3>
          <ul className='nav flex-column '>
            <li className='nav-item p-2'>
              <Link className='text-white text-decoration-none' to='/home'>
                Home
              </Link>
            </li>
            <li className='nav-item p-2'>
              <Link className='text-white text-decoration-none' to='/service'>
                Service
              </Link>
            </li>
            <li className='nav-item p-2'>
              <Link className='text-white text-decoration-none' to='/about'>
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className='col-md-4'>menu</div>
      </div>
    </div>
  );
};

export default Footer;
