import react from "../assets/react.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import python from "../assets/python.png";
import rails from "../assets/rails.png";
import css from "../assets/css.png";
import php from "../assets/php.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";

const Technologies = () => {
  const icons = [
    { id: 1, name: "Javascript", image: js },
    { id: 2, name: "React", image: react },
    { id: 3, name: "Rails", image: rails },
    { id: 4, name: "Python", image: python },
    { id: 5, name: "HTML", image: html },
    { id: 6, name: "CSS", image: css },
    { id: 7, name: "Bootstrap", image: bootstrap },
    { id: 8, name: "Tailwind", image: tailwind },
    { id: 9, name: "PHP", image: php },
  ];
  return (
    <section className="container mt-5 py-5" id="technologies">
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center">Technologies</h1>
          <p className="text-center"></p>
        </div>
      </div>
      <div className="mt-3">
        <div className="row ">
          {icons.map((item) => (
            <>
              <div className="col-md-3 mb-4 ">
                <div key={item.id} className="card">
                  <img src={item.image} className="tech-icon" alt={item.name} />
                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
