import { useEffect } from "react";
import graphics from "../assets/graphics.png";
import frontend from "../assets/Frontend.png";
import database from "../assets/database.png";
import support from "../assets/support.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const services = [
    {
      id: 1,
      title: "Fullstack Development",
      desc: "I have a strong understanding of both the frontend development and backend processes and can build any applications from scratch. I work with JavaScript, React, PHP, Ruby, Rails, Bootstrap, and Tailwind.",
      icon: frontend,
    },
    {
      id: 2,
      title: "Graphics Design",
      desc: "A creative graphics designer who combines technical proficiency with artistic innovation to produce visually compelling and effective designs. Designs banners, logos, flyers, posters among other artistic pieces.",
      icon: graphics,
    },
    {
      id: 3,
      title: "Database Design",
      desc: "I have a strong understanding of the database design process and create them from scratch. I have experience with Postgresql & Mysql.",
      icon: database,
    },
    {
      id: 4,
      title: "Technical Support",
      desc: "I have an in-depth understanding of systems' technical requirements and offer appropriate consultancy services to users and clients.",
      icon: support,
    },
  ];
  return (
    <section
      className="container mt-5 py-5"
      data-aos="flip-left"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      id="services"
    >
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center">Services</h1>
          <p className="text-center">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {services.map((item) => (
          <div key={item.id} className="col">
            <div className="card shadow">
              <img src={item.icon} className="services-icon" alt={item.title} />
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
