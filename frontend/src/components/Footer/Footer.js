import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaTelegramPlane } from "react-icons/fa";
import './Footer.css' 

export default function Footer() {
  return (
    <div>
      <footer className="footer-section">
      <div className="container-fluid">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaMapMarkerAlt />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                    Ratnaakar Nine Square<br />
                    Keshavbaug Party,<br />
                    Vastrapur, Ahmedabad, Gujarat.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaPhone />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaEnvelopeOpen />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>eventnestle@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="css/178490876_padded_logo.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><FaFacebookF className="facebook-bg" /></a>
                  <a href="#"><FaTwitter className="twitter-bg" /></a>
                  <a href="#"><FaInstagram className="instagram-bg" /></a>
                  <a href="#"><FaGooglePlusG className="google-bg" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="service.html">Services</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="testimonials.html">Testimonials</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><FaTelegramPlane /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved <a href="index.html">EventNestle</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
