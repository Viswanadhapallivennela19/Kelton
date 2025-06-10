import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="social-links">
          <a href="https://www.facebook.com/share/158YPYf4sL/">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://x.com/Vennela2003?t=e45i9ZPYUvQh0Gd0EU4uiw&s=08">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.instagram.com/chinn_i_web_x?utm_source=qr&igsh=aDFweXZ0cHMxcTFz">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/viswanadhapalli-vennela-45860b22a/">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <nav>
          <ul className="list-unstyled d-flex m-0">
            <li className="ms-3">
              <Link
                to="/"
                className="text-decoration-none fw-semibold default-color hover-color"
              >
                Home
              </Link>
            </li>
            |
            <li className="ms-3 ">
              <Link
                to="/about"
                className="text-decoration-none default-color hover-color fw-semibold"
              >
                About
              </Link>
            </li>
            |
            <li className="ms-3 ">
              <Link
                to="/vita"
                className="text-decoration-none default-color hover-color fw-semibold"
              >
                Vita
              </Link>
            </li>
            |
            <li className="ms-3 ">
              <Link
                to="/nourish"
                className="text-decoration-none default-color hover-color fw-semibold"
              >
                Nourish
              </Link>
            </li>
            |
            <li className="ms-3 ">
              <Link
                to="/contact"
                className="text-decoration-none  fw-semibold default-color hover-color"
              >
                Contact
              </Link>
            </li>{" "}
            |
          </ul>
        </nav>
        <div className="text-center py-3  fs-6 border-top mt-3  m-auto">
          <p className="mb-0 sp-font">
            &copy;2025 |
            <strong className="">
              <span className='footer-brand' >Vitavibe </span> by Viswanadhapalli Vennela
            </strong>
            | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
