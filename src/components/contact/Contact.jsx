import './contact.css';





import Amber from '../../assets/amber.png';
import SpiceEmpire from '../../assets/spiceempire.png';
import Chefonline from '../../assets/chefonline.png';
import Vedaa from '../../assets/vedaa.png';







import facebookIcon from '../../assets/facebook-icon.png';
import githubIcon from '../../assets/githubIcon.png';
import linkdinIcon from '../../assets/linkdinIcon.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k4vz8ks', 'template_7x6xd2b', form.current, 'R4JQwmrcoyNPfidUl')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My clients</h1>
                <span className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </span>

                <div className="clientImgs grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <img src={Amber} alt="Client" className="clientImg" />
                    <img src={SpiceEmpire} alt="Client" className="clientImg" />
                    <img src={Vedaa} alt="Client" className="clientImg" />
                    <img src={Chefonline} alt="Client" className="clientImg" />
                </div>

            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn cursor-pointer'>Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/jahid0117/" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" className="link" />
                        </a>

                       <a href="https://github.com/tanbirahammad" target='_blank'>
                       <img src={githubIcon} alt="Github" className="link" />
                       </a>
                        <a href="https://www.linkedin.com/in/tanbir-ahammad/" target='_blank'>
                        <img src={linkdinIcon} alt="Linkdin" className="link" />
                        </a>

                        <a href="https://www.instagram.com/jahid0117/" target='_blank'>
                        <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
