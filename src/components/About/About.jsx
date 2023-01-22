import './About.css'

import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

import Me from '../../assets/my-photo-2.png'

export default function About () {

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={Me} alt="My Photo" />
                    </div>
                </div>
                <div className="about_content">
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'></FaAward>
                            <h5>Experience</h5>
                            <small>2+ Years Studying & Working</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'></VscFolderLibrary>
                            <h5>Projects</h5>
                            <small>2+ Years Studying</small>
                        </article>
                    </div>
                    <p>I'm :
                        <ul>
                            <li>Recently completed Interactive Media Design program at Algonquin College and skilled in HTML, CSS, JavaScript as well as design tools.</li>
                            <li>Collaborate on team project to design and build responsive website using WordPress Divi Theme for a real client.</li>
                            <li>Quick learner with strong attention to detail and passion for creating visually appealing and user-friendly websites.</li>
                        </ul>
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}