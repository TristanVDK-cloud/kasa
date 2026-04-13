import { Link } from 'react-router-dom'
import './Card.scss'


function Card({id, title, cover}) {
    return (
        <Link to={`/Logement/${id}`} className='card'>
            <img src={cover} alt={title} className='card__img' />
            <h3 className='card__title'>{title}</h3>
        </Link>
    )
}

export default Card