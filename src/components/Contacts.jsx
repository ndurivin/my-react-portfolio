import contact from "../assets/Contact-Me.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contacts = () => {
  const socials = [
    {
      id: 2,
      link: "https://github.com/ndurivin",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/vincent-nduri-8b2228b5/",
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      link: "https://twitter.com/vinnduri",
      icon: <FaTwitter />,
    },
  ];
  return (
    <section className="container-fluid contacts mt-5 py-5" id="contacts">
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center text-white py-3">Connect with Me!</h1>
          <p className="text-center"></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="mb-3" src={contact} alt="contacts" />
            <p className="text-white">Text, Call or WhatsApp on,</p>
            <p className="text-white">Phone: +254 726506565</p>
            <p className="text-white">Email: ndurivo@gmail.com</p>
            <div>
              {socials.map(({ id, link, icon }) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={id}
                  className="mx-3 contact-icons"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-6 mt-3">
            <form action="">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" required />
                <label>Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" required />
                <label>Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" required />
                <label>Contact</label>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  style={{ height: "100px" }}
                ></textarea>
                <label>Message</label>
              </div>
              <button className="btn btn-primary mt-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
