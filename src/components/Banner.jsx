// import { BsArrowDown } from "react-icons/bs";
import image from "../assets/image.jpg";
const Banner = () => {
  return (
    <section>
      <div className="">
        <img
          src={image}
          alt="banner image"
          className="img-fluid"
          style={{ maxHeight: "700px", height: "auto", width: "100%" }}
        />
      </div>
      <div className="">
        <div className="">{/* <BsArrowDown className="" /> */}</div>
      </div>
    </section>
  );
};

export default Banner;
