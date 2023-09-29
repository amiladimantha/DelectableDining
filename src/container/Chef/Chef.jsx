import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">Our Belief</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">I invite you to savor the symphony of flavors meticulously crafted by our passionate team. </p>
        </div>
        <p className="p__opensans"> Each ingredient is a tribute to nature's bounty, and every plate is a canvas waiting to be painted with unforgettable tastes and textures.. </p>
      </div>

      <div className="app__chef-sign">
        <p>Daniel Munroe</p>
        <p className="p__opensans">Head Chef</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;