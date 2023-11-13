import cmr from "../assets/cmr2.png";
import kayole from "../assets/kayole.png";
import berils from "../assets/berils.png";
import unikcolors from "../assets/unikcolors.png";
import umoja2 from "../assets/umoja2.png";

const Projects = () => {
  const projects = [
    { id: 1, name: "Umoja II SDA Church", link: "", image: umoja2 },
    { id: 2, name: "CMR - Africa", link: "", image: cmr },
    { id: 3, name: "Kayole Hospital", link: "", image: kayole },
    {
      id: 4,
      name: "Beril's Hospital",
      link: "",
      image: berils,
    },
    { id: 1, name: "Unikcolors Media Institute", link: "", image: unikcolors },
  ];
  return (
    <section className="container mt-5 py-5" id="projects">
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
            <div className="col">
              <div key={item.id} className="card">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{item.name}</h5>
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
