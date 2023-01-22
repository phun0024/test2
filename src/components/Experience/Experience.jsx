import './Experience.css'

import { BsPatchCheckFill } from 'react-icons/bs'

const frontendExpData = ['HTML', 'CSS', 'Javascript', 'React', 'Vite', 'Bootstrap']

const backendExpData = ['PHP', 'MySQL', 'Laravel']

export default function Experience
() {

    return (
        <>
            <section id='experience'>
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>
                <div className="container experience_container">
                    {/* -------- FRONTEND -------- */}
                    <div className="experience_frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience_content">
                            {
                                frontendExpData.map((exp) => {
                                    return (
                                        <article className='experience_details'>
                                            <BsPatchCheckFill className='experience_details-icon' />
                                            <h4>{exp}</h4>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* -------- END FRONTEND --------- */}

                    {/* --------- BACKEND -------- */}
                    <div className="experience_backend">
                        <h3>Backend Development</h3>
                        <div className="experience_content">
                            {
                                backendExpData.map((exp) => {
                                    return (
                                        <article className='experience_details'>
                                            <BsPatchCheckFill className='experience_details-icon' />
                                            <h4>{exp}</h4>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* ------- END BACKEND -------- */}
                </div>
            </section>
        </>
    )
}