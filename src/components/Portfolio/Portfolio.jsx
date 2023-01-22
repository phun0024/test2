import './Portfolio.css'

import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'

export default function Portfolio 
() {

    return (
        <>
            <section id='portfolio'>
                <h5>My Works</h5>
                <h2>Portfolio</h2>
                <div className="container portfolio_container">
                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={img1} alt="" />
                        </div>
                        <h3>This is the portfolio item title</h3>
                        <div className="portfolio_item-cta">
                            <a href="" className='btn' target={'_blank'}>Github</a>
                            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={img1} alt="" />
                        </div>
                        <h3>This is the portfolio item title</h3>
                        <div className="portfolio_item-cta">
                            <a href="" className='btn' target={'_blank'}>Github</a>
                            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio_item'>
                        <div className="portfolio_item-image">
                            <img src={img1} alt="" />
                        </div>
                        <h3>This is the portfolio item title</h3>
                        <div className="portfolio_item-cta">
                            <a href="" className='btn' target={'_blank'}>Github</a>
                            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}