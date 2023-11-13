import { Link } from "react-scroll";
import logo from "../assets/logo.png";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container" id="home">
        <a className="navbar-brand" href="#" id="home">
          <img src={logo} alt="logo" height="60" />
          <span className="text-white mx-2">VINN</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="nav-link text-white"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="nav-link text-white"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="technologies"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="nav-link text-white"
              >
                Technologies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="nav-link text-white"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="nav-link text-white"
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                className="btn btn-primary"
              >
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
