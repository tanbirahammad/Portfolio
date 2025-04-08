import React from 'react';
import './skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skill = () => {
    return (
        <section id='skills'>
                   <span className="skillTitle">What I do</span>
                   <span className="skillDesc">Full-stack developer with expertise in ReactJS and NodeJS. Skilled in building dynamic, responsive web applications, creating scalable back-end solutions with Node, Express, and integrating databases for seamless user experiences.</span>
                   <div className="skillBars">
                       <div className="skillBar">
                           <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                           <div className="skillBarText">
                               <h2>Figma Design</h2>
                               <p>Creating pixel-perfect designs focused on seamless user experiences.</p>
                           </div>
                       </div>
                       <div className="skillBar">
                           <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                           <div className="skillBarText">
                               <h2>Frontend Development</h2>
                               <p>ReactJS Frontend Developer, building interactive and responsive web applications.</p>
                           </div>
                       </div>
                       <div className="skillBar">
                           <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                           <div className="skillBarText">
                               <h2>Backend Development</h2>
                               <p>Backend Developer specializing in Node.js and Express.js for scalable applications.</p>
                           </div>
                       </div>
                   </div>
               </section>
    );
}

export default Skill;
