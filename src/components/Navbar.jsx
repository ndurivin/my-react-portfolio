import { Link } from "react-scroll";
import logo from "../assets/logo.png";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = () => {
  const links = [
    { id: 1, name: "", path: "home" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Services", path: "services" },
    { id: 4, name: "Technologies", path: "technologies" },
    { id: 5, name: "Projects", path: "projects" },
    { id: 6, name: "Testimonials", path: "testimonials" },
    // { id: 6, name: "Contacts", path: "contacts" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container" id="home">
        <a className="navbar-brand" href="home" id="home">
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
            {links.map((link) => (
              <li key={link.id} className="nav-item">
                <Link
                  activeClass="active"
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  className="links"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-150}
                duration={200}
                className="btn btn-outline-primary"
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
