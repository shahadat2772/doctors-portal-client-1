import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/ky8zPJj/footer.png')`,
        backgroundSize: `cover`,
      }}
    >
      <footer class="footer p-10 text-base-content">
        <div>
          <span class="footer-title">SERVICES</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <a class="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <div>
        <p className="text-center text-sm pb-10">
          Copyright © 2022 - All right reserved by ACME Industries Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
