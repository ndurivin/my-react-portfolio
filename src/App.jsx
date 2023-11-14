import About from "./components/About";
import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container">
        <About />
        <Services />
        <Technologies />
        <Projects />
        <Testimonials />
      </div>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
