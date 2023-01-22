import './Header.css'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import Me from '../../assets/my-photo.png'

export default function Header () {

    return (
        <header>
            <div className="container header_container">
                <h5>Hello. I'm</h5>
                <h1>Van Phung</h1>
                <h5 className='text-light'>Front-End Web Developer</h5>
                
                <HeaderSocials></HeaderSocials>

                <div className="me">
                    <img src={Me} alt="My Photo" />
                </div>

                <CTA></CTA>
                
                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}