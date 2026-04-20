import { useParams, Navigate } from "react-router-dom";
import data from '../data/logements.json'
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import './../styles/pages/_logement.scss'


function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);


  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement-page">
      <Slideshow pictures={logement.pictures} title={logement.title} />
      <div className="logement-header">
        <div className="logement-header__left">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="logement-header__right">
          <div className="host">
            <span className="host__name">{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} className="host__picture"/>
          </div>
          <div className="rating">
            <Rating score={logement.rating } />
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}
export default Logement;