import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container" id="home">
        <a className="navbar-brand" href="home">
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
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={150}
                duration={200}
                className="nav-link text-white"
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={100}
                duration={200}
                className="nav-link text-white"
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={100}
                duration={200}
                className="nav-link text-white"
              >
                Services
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={100}
                duration={200}
                className="nav-link text-white"
              >
                Skills
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={100}
                duration={200}
                className="nav-link text-white"
              >
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={100}
                duration={200}
                className="nav-link text-white"
              >
                Testimonials
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={100}
                duration={200}
                className="btn btn-primary"
              >
                Connect
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
