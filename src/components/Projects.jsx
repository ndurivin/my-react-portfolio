import cmr from "../assets/cmr2.png";
import kayole from "../assets/kayole.png";
import berils from "../assets/berils.png";
import unikcolors from "../assets/unikcolors.png";
import umoja2 from "../assets/umoja2.png";
import vinn from "../assets/vinn.png";
import gospelark from "../assets/gospelark.png";
import gepo from "../assets/gepo.png";
import afyabank from "../assets/afyabank.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const projects = [
    {
      id: 1,
      name: "Afyabank",
      desc: "A blood bank management system that connects blood banks to donors, hospitals, and healthcare facilities.",
      link: "",
      image: afyabank,
    },
    {
      id: 2,
      name: "Portfolio App",
      desc: "An App detailing my experiences, competencies, technologies used and projects.",
      link: "https://vinn-portfolio.vercel.app/",
      image: vinn,
    },
    {
      id: 3,
      name: "The Gospel Ark",
      desc: "A pay to view app that manages the sale of Adventist gospel music and videos.",
      link: "",
      image: gospelark,
    },
    {
      id: 4,
      name: "Umoja II SDA Church",
      desc: "A A church Managemnt application with payments integration managing all church affairs and services",
      link: "https://www.umojaiisda.org/",
      image: umoja2,
    },
    {
      id: 5,
      name: "CMR - Africa",
      desc: "Africa’s premium legal Capacity Building Platform (NGO).",
      link: "https://www.cmrafrica.org/",
      image: cmr,
    },
    {
      id: 6,
      name: "Kayole Hospital",
      desc: "Kayole Hospital's website and Management system.",
      link: "https://www.kayolehospital.co.ke/",
      image: kayole,
    },
    {
      id: 7,
      name: "Beril's Hospital",
      desc: "Beril Hospital's website and Management system.",
      link: "https://berilsmedicalcenter.co.ke/",
      image: berils,
    },

    {
      id: 8,
      name: "Give Education A Priority (NGO)",
      desc: "An NGO operating both in Kenya and South Sudan, focusing on Health, Education, & Clean water provision.",
      link: "https://www.giveeducationapriority.org/",
      image: gepo,
    },
    {
      id: 9,
      name: "Unikcolors Media Institute",
      desc: "The Insistute's Webiste and Students and Fees management system.",
      link: "",
      image: unikcolors,
    },
  ];
  return (
    <section
      className="container mt-5 py-5"
      data-aos="zoom-out-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      id="projects"
    >
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center">Projects</h1>
          <p className="text-center">
            Take a look at some of the successfully completed projects using
            various tech stacks depending on client preferences and application
            requirements.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projects.map((item) => (
          <div key={item.id} className="col">
            <div className="card shadow">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <a href={item.link} className="project-title text-center">
                  {item.name}
                </a>
                <p className="text-center">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
