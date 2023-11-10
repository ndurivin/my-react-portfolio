import { BsArrowDown } from "react-icons/bs";
import image from "../assets/image.jpg";
const Banner = () => {
  return (
    <section>
      <div className="container-fluid">
        <img
          src={image}
          alt="Responsive Image"
          className="img-fluid"
          style={{ maxHeight: "700px", height: "auto", width: "100%" }}
        />
      </div>
      <div className="">
        <img
          src=""
          alt="profile"
          className="w-80 md:w-120 py-5 object-cover object-top"
        />
        <a
          href="../../public/Vincent Nduri.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-teal-600 to-rose-500 text-white py-2 rounded-lg"
        >
          My Resume
        </a>
        <div className="flex items-center justify-center mt-10">
          <BsArrowDown className="text-gray-400 text-2xl animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
