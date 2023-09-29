import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G_overlay" />
    </div>
    
    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className="p__opensans">Our story is one of passion for food, a commitment to quality, and a dedication to making every visit special. With a diverse menu inspired by global flavors and prepared with locally sourced ingredients, we aim to please the most discerning palates.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className="p__opensans">DineDelight has been a culinary cornerstone in our community for over a decade. Since our inception, we've been dedicated to delivering exquisite flavors and exceptional service, making every visit a delightful experience.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
