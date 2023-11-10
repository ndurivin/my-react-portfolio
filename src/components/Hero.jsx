import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const socials = [
    {
      id: 1,
      link: "https://www.facebook.com/vincent.nduri",
      icon: <FaFacebook />,
    },
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
    {
      id: 5,
      link: "https://www.instagram.com/vinnnduri/",
      icon: <FaInstagram />,
    },
  ];

  const [text] = useTypewriter({
    words: [
      "Full-stack Developer",
      "Technical Mentor",
      "IT Support Technician",
    ],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 90,
  });

  return (
    <section className="container ">
      <h2 className="">Vincent Nduri</h2>
      <h3 className="py-3">
        I am a{" "}
        <span style={{ fontWeight: "light", color: "teal" }}>{text}</span>
        <span style={{ color: "gray" }}>
          <Cursor />
        </span>
      </h3>
      <p className="max-w-xl font-light text-gray-500 text-xl">
        <span className="animate-pulse text-4xl"></span>I am an amazing and
        interesting developer. If you have a great project that needs an amazing
        person with amazing skills, I am your person of choice.
      </p>
      {/* socials */}
      <div className="flex justify-evenly py-5 lg:py-8 text-2xl w-full md:w-1/3">
        {socials.map(({ id, link, icon }) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={id}
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>
      {/* Dev image  */}
    </section>
  );
};

export default Hero;
