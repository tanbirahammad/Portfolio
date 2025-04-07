import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            <a href="https://movieapp-lovat-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio1} alt="Portfolio Image 1" className="worksImg" />
            </a>
            <a href="https://apple-clonee-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio2} alt="Portfolio Image 2" className="worksImg" />
            </a>
            <a href="https://knowledge-cafeee.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio3} alt="Portfolio Image 3" className="worksImg" />
            </a>
            <a href="https://donation-campaign-henna.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio4} alt="Portfolio Image 4" className="worksImg" />
            </a>
            <a href="https://even-management.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio5} alt="Portfolio Image 5" className="worksImg" />
            </a>
            <a href="https://course-registration-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio6} alt="Portfolio Image 6" className="worksImg" />
            </a>
        </div>
        <a href="https://github.com/tanbirahammad?tab=repositories" target="_blank">
    <button className="workBtn cursor-pointer">See More</button>
</a>

    </section>
    
    );
}

export default Works;