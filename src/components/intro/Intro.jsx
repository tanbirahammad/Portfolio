import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
     
        <section  id="intro">
                   <div className="introContent">
                       <span className="hello">Hello,</span>
                       <span className="introText">I'm <span className="introName">Tanbir</span> <br />Frontend Developer</span>
                       <p className="introPara">Passionate Frontend Web Developer, I create user-friendly, responsive <br /> websites using modern technologies.</p>
                       <Link to="/hire">
  <button onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }} className="btn cursor-pointer">
    <img src={btnImg} alt="Hire" className="btnImg" /> Hire Me
  </button>
</Link>

                   </div>
                   <img src={bg} alt="Profile" className="bg" />
               </section>







       
    );
}

export default Intro;
