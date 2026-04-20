import { Link } from "react-router-dom";
import '../styles/pages/_error.scss';


function Error() {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-page__link">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;