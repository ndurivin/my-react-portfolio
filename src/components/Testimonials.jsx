import { useEffect } from "react";
import userf from "../assets/userf.png";
import userm from "../assets/userm.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      desc: "'Vinn consistently delivered high-quality code, met tight deadlines, and communicated effectively throughout the development process.'",
      user: userf,
    },
    {
      id: 2,
      name: "Alex Joseph",
      desc: "'Working with Vincent was an absolute pleasure! His coding skills are top-notch, and he delivered a robust and efficient solution for our company.'",
      user: userm,
    },
    {
      id: 3,
      name: "Mark Stevens",
      desc: "'I've had the privilege of collaborating with Vinn on several projects, and I can confidently say he is one of the most talented developers I've worked with.'",
      user: userm,
    },
  ];
  return (
    <section
      className="container mt-5 py-5"
      data-aos="zoom-out-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      id="testimonials"
    >
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center">Testimonials</h1>
          <p className="text-center">What do some of the clients say?</p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {testimonials.map((item) => (
          <>
            <div key={item.id} className="col">
              <div className="card shadow">
                <img
                  src={item.user}
                  className="testimonials-icon"
                  alt={item.name}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
