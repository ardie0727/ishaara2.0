// eslint-disable-next-line no-unused-vars
import React from 'react';
import F1 from './../../assets/f1.png'
import F2 from './../../assets/f2.png'
import F3 from './../../assets/f3.png'
import F4 from './../../assets/f4.png'
import F5 from './../../assets/f5.png'

export default function Features() {
  return (
    <section id='features' style={{backgroundColor:'#fff'}}>
      <div style={{ padding: '6rem 0'}}>
        <div style={{ maxWidth: '1280px',padding: '0 1rem', boxSizing: 'border-box' }}>
        {/* <h3 style={{ marginTop: '2rem', fontSize: '2.5rem', lineHeight: '2.25rem', fontWeight: '800', letterSpacing: '-0.025em', color: '#374151',textAlign:'center' }}>
              <span style={{ color: '#EF4444', textDecoration: 'underline' }}>Features</span>
            </h3> */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginTop: '2rem', fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: '800', letterSpacing: '-0.025em', color: '#374151' }}>
              Key <span style={{ color: '#EF4444' }}>Features</span>
            </h3>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', columnGap: '2rem', rowGap: '2.5rem' }}>
              <li style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
                    <img src={F1} alt="Description of your image" style={{ height: '60px', width: '60px', marginLeft:'10px' }} />
                </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', lineHeight: '0.75rem', fontWeight: '500', color: '#374151' }}>SIGN TO TEXT</h4>
                    <p style={{ marginTop: '0rem', fontSize: '0.8rem', lineHeight: '1.5rem', color: '#6B7280' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                </div>
              </li>
              
              <li style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
                    <img src={F2} alt="Description of your image" style={{ height: '60px', width: '60px', marginLeft:'10px' }} />
                </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', lineHeight: '0.75rem', fontWeight: '500', color: '#374151' }}>DEPTH DETECTION</h4>
                    <p style={{ marginTop: '0rem', fontSize: '0.8rem', lineHeight: '1.5rem', color: '#6B7280' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                </div>
              </li>
              <li style={{ marginTop: '1rem' }}>
               <div style={{ display: 'flex' }}>
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
                    <img src={F3} alt="Description of your image" style={{ height: '60px', width: '60px', marginLeft:'10px' }} />
                </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', lineHeight: '0.75rem', fontWeight: '500', color: '#374151' }}>GRAMMATICALLY CORRECT SENTENCE</h4>
                    <p style={{ marginTop: '0rem', fontSize: '0.8rem', lineHeight: '1.5rem', color: '#6B7280' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginTop: '2rem', fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: '800', letterSpacing: '-0.025em', color: '#374151' }}>
              AI <span style={{ color: '#EF4444' }}>Inside</span>
            </h3>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', columnGap: '2rem', rowGap: '2.5rem' }}>
              <li style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
                    <img src={F4} alt="Description of your image" style={{ height: '60px', width: '60px', marginLeft:'10px' }} />
                </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', lineHeight: '0.75rem', fontWeight: '500', color: '#374151' }}>HIGH ACCURACY</h4>
                    <p style={{ marginTop: '0rem', fontSize: '0.8rem', lineHeight: '1.5rem', color: '#6B7280' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                </div>
              </li>
              
              <li style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
                    <img src={F5} alt="Description of your image" style={{ height: '60px', width: '60px', marginLeft:'10px' }} />
                </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', lineHeight: '0.75rem', fontWeight: '500', color: '#374151' }}>LLM POWERED</h4>
                    <p style={{ marginTop: '0rem', fontSize: '0.8rem', lineHeight: '1.5rem', color: '#6B7280' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                </div>
              </li>
              <li style={{ marginTop: '1rem' }}>
               <div style={{ display: 'flex' }}>
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
                    <img src={F3} alt="Description of your image" style={{ height: '60px', width: '60px', marginLeft:'10px' }} />
                </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', lineHeight: '0.75rem', fontWeight: '500', color: '#374151' }}>GRAMMATICALLY CORRECT SENTENCE</h4>
                    <p style={{ marginTop: '0rem', fontSize: '0.8rem', lineHeight: '1.5rem', color: '#6B7280' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

