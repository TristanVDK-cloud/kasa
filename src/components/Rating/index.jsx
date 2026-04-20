import starRed from '../../assets/red_star.png'
import starGrey from '../../assets/grey_star.png'
import './Rating.scss'

function Rating({ score }) {
    const stars = [1, 2, 3, 4, 5];
    const ratingNumber = Number(score)

    return (
        <div className='rating'>
            {stars.map((level) => (
                <img key={level.toString()}
                    src={level <= ratingNumber ? starRed : starGrey}
                    alt={level <= ratingNumber ? "Étoile pleine" : "Étoile vide"}
                    className="rating__star"
                />
            ))}
        </div>
    )
}

export default Rating