import React from "react";
import '../../public/CSS/Footer.css';
function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Full Stack<span>Developer</span>
          </h3>

          <p class="footer-links">
          </p>

          <p class="footer-company-name">seeking a job opportunity &#128546;</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>16</span> Bhopal Madhya Pradesh india 
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>8305865320</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">pavankarofficial2001@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About MySelf</span>
            Hello, I'm Gourav, a passionate IT professional and web developer with a background in Computer Science and Engineering. I hold a Bachelor's degree in Technology, specializing in CSE
          </p>

          <div class="footer-icons">
            <a href="/">
            <i class="fa fa-comment" aria-hidden="true"></i>
            </a>
            <a href="/">
            <i class="fa fa-server" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
