import { useState } from 'react';
import './Collapse.scss';
import arrowIcon from '../../assets/arrow.png'


function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='collapse'>
            <div className='collapse__header' onClick={() => setIsOpen(!isOpen)}>
                <h2 className='collapse__title'>{title}</h2>
                <img src={arrowIcon} alt="Ouvrir" className={`collapse__arrow ${isOpen ? 'active' : ''}`} />
            </div>
            {isOpen && (
                <div className='collapse__content'>
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Collapse

