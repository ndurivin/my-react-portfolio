import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5 mt-5">
        <div className="row border-bottom pb-3">
          <div className="col-md-4">
            <a className="navbar-brand" href="home">
              <img src={logo} alt="logo" height="60" />
              <span className="text-white mx-2">VINN</span>
            </a>
            <p className="mt-2">
              I am an amazing and interesting developer. If you have a great
              project that needs an amazing person with amazing skills, I am
              your person of choice..
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  active-footerclass="active-footer"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                  className="nav-link text-white"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  active-footerclass="active-footer"
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
              <li>
                <Link
                  active-footerclass="active-footer"
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
              <li>
                <Link
                  active-footerclass="active-footer"
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
            </ul>
          </div>

          {/* Right Column - Contact Details */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Call, WhatsApp, or Text me on,</p>
            <p>+254 726 506 565</p>
            <p>Email: ndurivo@gmail.com</p>
          </div>
        </div>

        {/* Lower Row - Copyright */}
        <div className="row pt-3 py-5 mt-5">
          <div className="col">
            <p className="text-center">
              &copy; {currentYear} Vinn Nduri - Software Engineer. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
