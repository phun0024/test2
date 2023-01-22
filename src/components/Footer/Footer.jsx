import './Footer.css'

import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

import Me from '../../assets/my-photo.png'

export default function Footer () {

    return (
        <footer>
            <div className="footer_me">
                <img src={Me} alt="My Photo" />
            </div>
            <div>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer_socials">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FiInstagram /></a>
                </div>

                <div className="footer_copyright">
                    <small>&copy; Van Phung, 2023. All right reserved.</small>
                </div>
                <p className='ref'>* This portfolio layout is according to the tutorial of EGATOR</p>
            </div>
        </footer>
    )
}