import './Contact.css'

import { MdOutlineEmail } from 'react-icons/md'

export default function Contact () {

    return (
        <>
            <section id='contact'>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className="container contact_container">
                    <div className="contact_options">
                        <article className='contact_option'>
                            <MdOutlineEmail className='contact_option-icon' />
                            <h4>Email</h4>
                            <h5>vanphung030792@gmail.com</h5>
                            <a href="mailto:vanphung030792@gmail.com">Send a message</a>
                        </article>
                    </div>
                    {/* ------- End of Contact Options ----------- */}

                    <form action="">
                        <input type="text" name="name" placeholder='Your Full Name' required />
                        <input type="email" name="email" placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}