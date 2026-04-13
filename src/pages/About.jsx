import Banner from "../components/Banner";
import imgAbout from "../assets/banner_about.png";


function About() {
  return (
    <div>
      <Banner
        image={imgAbout}
        origin="about"
      />
    </div>
  );
}

export default About;