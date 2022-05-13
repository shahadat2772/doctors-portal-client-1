import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/ky8zPJj/footer.png')`,
        backgroundSize: `cover`,
      }}
    >
      <footer className="footer p-10 text-base-content">
        <div>
          <span className="footer-title">SERVICES</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
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
