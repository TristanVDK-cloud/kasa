import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import imgAbout from "../assets/banner_about.png";
import aboutData from "../data/about.json"



function About() {
  return (
    <div>
      <Banner image={imgAbout} origin="about" />
      <div className="about-container">
        {aboutData.map((item) => (
          <Collapse
          key={item.id}
          title={item.title}
          content={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;