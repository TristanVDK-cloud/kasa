import logo from '../../assets/header_logo.png'
import './Header.scss'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="Kasa" className='header__logo' />
            <nav className='header__nav'>
                <NavLink to="/" className="header__nav-link">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="header__nav-link">
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header