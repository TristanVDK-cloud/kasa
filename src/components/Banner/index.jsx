import './Banner.scss'


function Banner({ image, title, origin }) {
    return (
        <div className={`banner banner--${origin}`}>
            <img src={image} alt="Bannière" className='banner__img' />
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    );
}

export default Banner