// eslint-disable-next-line no-unused-vars
import React from 'react';
import heroimg from './../../../public/assets/images/hero.png';
import './../../../public/assets/css/element.css';
const Hero = () => {
  return (
    <section id="hero">
    <>
      <div style={{ padding: '50px'}}>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px', marginRight:'20px' }}> {/* wrapper */}
          <div style={{ flex: 1, marginTop: '20px', fontFamily:'Inter' }}>
            <p style={{ fontSize: '32px', marginTop: '100px', marginLeft: '5px',fontWeight:'300',color:'#808080', textAlign:'left'}}>Convert Indian Sign Language<br/>To Text In <br/>Real-Time With  ISHAARA</p>
            <div className='wrap' style={{ marginTop: '20px', marginRight:'280px'}}>
              <button className='get'>Get Started</button>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src={heroimg} style={{ width: '100%', height: 'auto', borderTopRightRadius: '100px', marginTop:'-10px'}} alt="Your Image" />
          </div>
        </div>
      </div>
    </>
    </section>
  );
};

export default Hero;
