import { useState } from "react";
import "./Slideshow.scss"
import arrowForward from "../../assets/arrow_forward.png"
import arrowBack from "../../assets/arrow_back.png"

function Slideshow({ pictures, title }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className="slideshow">
            <img src={pictures[currentIndex]} alt={title} className="slideshow__img" />

            {pictures.length > 1 && (
                <>
                    <img src={arrowBack} alt="Précédent" className="slideshow__arrow slideshow__arrow-back" onClick={prevSlide} />
                    <img src={arrowForward} alt="Suivant" className="slideshow__arrow slideshow__arrow-forward" onClick={nextSlide} />
                    <p className="slideshow__counter">
                        {currentIndex + 1} / {pictures.length}
                    </p>
                </>
            )}
        </div>

    )
}

export default Slideshow