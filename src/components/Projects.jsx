import cmr from "../assets/cmr2.png";
import kayole from "../assets/kayole.png";
import berils from "../assets/berils.png";
import unikcolors from "../assets/unikcolors.png";
import umoja2 from "../assets/umoja2.png";
import vinn from "../assets/vinn.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const projects = [
    {
      id: 2,
      name: "Portfolio App",
      link: "https://vinn-portfolio.vercel.app/",
      image: vinn,
    },
    {
      id: 2,
      name: "Umoja II SDA Church",
      link: "https://www.umojaiisda.org/",
      image: umoja2,
    },
    {
      id: 3,
      name: "CMR - Africa",
      link: "https://www.cmrafrica.org/",
      image: cmr,
    },
    {
      id: 4,
      name: "Kayole Hospital",
      link: "https://www.kayolehospital.co.ke/",
      image: kayole,
    },
    {
      id: 5,
      name: "Beril's Hospital",
      link: "https://berilsmedicalcenter.co.ke/",
      image: berils,
    },
    { id: 6, name: "Unikcolors Media Institute", link: "", image: unikcolors },
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
          <>
            <div key={item.id} className="col">
              <div className="card shadow">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <a href={item.link} className="project-title text-center">
                    {item.name}
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
