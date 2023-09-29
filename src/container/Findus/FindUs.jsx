// import React from 'react';

// import { SubHeading } from '../../components';
// import { images } from '../../constants';

// const FindUs = () => (
//   <div className="app__bg app__wrapper section__padding" id="contact">
//     <div className="app__wrapper_info">
//       <SubHeading title="Contact" />
//       <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
//       <div className="app__wrapper-content">
//         <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
//         <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
//         <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
//         <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
//       </div>
//       <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Find Us</button>
//     </div>

//     <div className="app__wrapper_img">
//       <img src={images.findus} alt="finus_img" />
//     </div>
//   </div>
// );

// export default FindUs;

import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

function openGoogleMaps() {
  // URL for Google Maps with your desired location (replace with your specific location)
  const googleMapsUrl = 'https://maps.app.goo.gl/XYH653dNQik9edft7';

  // Open a new browser window or tab with Google Maps
  window.open(googleMapsUrl, '_blank');
}

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Miami, Chicago, Los Angeles, New York, Las Vegas</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={openGoogleMaps}>
        Find Us
      </button>
    </div>

    <div className="app__wrapper_img" >
      <img src={images.findus} style={{ border: '5px solid white', borderRadius:'10px'}} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
