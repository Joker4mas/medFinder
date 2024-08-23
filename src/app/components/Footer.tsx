import React from 'react'
import {
    FaTwitter,
    FaInstagram,
    FaFacebookSquare,
    FaPhone,
    FaEnvelope,
    FaLinkedin,
  } from "react-icons/fa";
  import { FaHospital } from "react-icons/fa6";
function Footer() {
  return (
    <div>
         <footer  data-testid="footer" className="footer bg-base-200 text-base-content text-center p-10">
          <aside data-testid="aside">
            <div className="inline-flex items-center">
              <FaHospital height={80} /> MedFinder
            </div>

            <p data-testid="aside-p">
              <br />
              Providing reliable guide to latest health development and
              Locations.
            </p>
          </aside>
          <nav data-testid="social-media">
            <h6 data-testid="footer-title" className="footer-title">Socials</h6>
            <a className="link link-hover inline-flex items-center gap-2">
              <FaTwitter /> Twitter
            </a>
            <a className="link link-hover inline-flex items-center gap-2">
              <FaInstagram /> Instagram
            </a>
            <a className="link link-hover inline-flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </a>
            <a className="link link-hover inline-flex items-center gap-2">
              <FaFacebookSquare /> FaceBook
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">MedFinder</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover inline-flex items-center gap-2">
              <FaPhone />
              To-Free 1-800-med-finder
            </a>
            <a className="link link-hover inline-flex items-center gap-2">
              <FaEnvelope />
              support@medfinder.com
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>

          <div>
            <p data-testid="copyright">&copy;2024 All right reserved.</p>
            <div data-testid="developed">Developed by Samuel Ogbaje</div>
          </div>
        </footer>
    </div>
  )
}

export default Footer