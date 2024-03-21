import React from "react";
const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="/about">About</a>
          </li>
        </ul>

        <p className="copyright">Catch'em ALL ©</p>
      </footer>
    </div>
  );
};

export default Footer;
