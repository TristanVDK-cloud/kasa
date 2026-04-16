import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import imgHome from "../assets/banner_home.png";


function Home() {
  return (
    <div>
      <Banner
      image={imgHome}
      title="Chez vous, partout et ailleurs"
      origin="home" />
      <Gallery />
    </div>
  );
}
export default Home;