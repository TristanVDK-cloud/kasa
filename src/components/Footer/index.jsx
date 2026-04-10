import logo from '../../assets/footer_logo.png'
import './Footer.scss'


function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt="Kasa" className='footer__logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


export default Footer