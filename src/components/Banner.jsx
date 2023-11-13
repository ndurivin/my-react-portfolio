// import { BsArrowDown } from "react-icons/bs";
import image from "../assets/banner.jpg";
const Banner = () => {
  return (
    <section>
      <div>
        <img
          src={image}
          alt="banner image"
          className="img-fluid"
          style={{ maxHeight: "900px", height: "auto", width: "100%" }}
        />
      </div>
      <div className="">
        <div className="">{/* <BsArrowDown className="" /> */}</div>
      </div>
    </section>
  );
};

export default Banner;
