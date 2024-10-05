import React from 'react';
import logo from '../../../src/assets/Required/footerLogo.png';

const Footer = () => {
  return (
    <footer className="footer flex flex-col lg:flex-row gap-10 bg-[#F3F3F3]  p-10 ">
      <nav className="flex-1 mb-6 lg:mb-0">
        <img src={logo} alt="Logo" className="w-40 mb-4 text-black" />
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. has been since the printer took.
        </p>
        <button className="btn btn-outline btn-warning">Appointment</button>
      </nav>
      <nav className="flex-1 mb-6 lg:mb-0">
        <h6 className="footer-title mb-4">Quick Links</h6>
        <a className="link link-hover block mb-2">About us</a>
        <a className="link link-hover block mb-2">Contact Us</a>
        <a className="link link-hover block mb-2">Doctors</a>
        <a className="link link-hover block mb-2">Departments</a>
        <a className="link link-hover block mb-2">My Account</a>
      </nav>
      <nav className="flex-1 mb-6 lg:mb-0">
        <h6 className="footer-title mb-4">Doc House Services</h6>
        <a className="link link-hover block mb-2">Pediatric Clinic</a>
        <a className="link link-hover block mb-2">Diagnosis Clinic</a>
        <a className="link link-hover block mb-2">Cardiac Clinic</a>
        <a className="link link-hover block mb-2">Laboratory Analysis</a>
        <a className="link link-hover block mb-2">Gynecological Clinic</a>
        <a className="link link-hover block mb-2">Personal Counseling</a>
        <a className="link link-hover block mb-2">Dental Clinics</a>
      </nav>
      <nav className="flex-1">
        <h6 className="footer-title mb-4">Working Hours</h6>
        <a className="link link-hover block mb-2">Monday - 10 am to 7 pm</a>
        <a className="link link-hover block mb-2">Tuesday - 10 am to 7 pm</a>
        <a className="link link-hover block mb-2">Wednesday - 10 am to 7 pm</a>
        <a className="link link-hover block mb-2">Thursday - 10 am to 7 pm</a>
        <a className="link link-hover block mb-2">Friday - 10 am to 7 pm</a>
        <a className="link link-hover block mb-2">Saturday - 10 am to 7 pm</a>
        <a className="link link-hover block mb-2">Sunday - 10 am to 7 pm</a>
      </nav>
    </footer>
  );
};

export default Footer;
