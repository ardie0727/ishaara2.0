// eslint-disable-next-line no-unused-vars
import React from 'react'
import Counting from './../Counting'
// import Number from Num.jsx;
export default function Counter() {
  return (
    <section id="count">
    <div style={{ marginTop: '85px',fontFamily: 'Inter' }}>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            {/* Card 1*/}
            <div style={{ width: '220px', height: '110px', textAlign: 'left'}}>
                <div style={{ color: 'red', fontSize: '17px', fontWeight: '300', marginBottom: '20px' }}>Number of Deaf and Mute People in India</div>
                <div style={{ color: '#33D9E3', fontSize: '32px', fontWeight: '500', marginBottom: '20px' }}><Counting n={630000000}/></div>
                <div style={{ position: 'relative', bottom: '15px', left: 0, width: '100%', height: '0.1rem', backgroundImage: 'linear-gradient(to right, red, red)' }} />
            </div>

            {/* Card 2*/}
            <div style={{ width: '220px', height: '110px', textAlign: 'left', margin: '0 200px' }}>
                <div style={{ color: 'red', fontSize: '17px', fontWeight: '300', marginBottom: '20px' }}>Number of Users of Indian Sign Language</div>
                <div style={{ color: '#33D9E3', fontSize: '32px', fontWeight: '500', marginBottom: '20px' }}><Counting n={84350000}/></div>
                <div style={{ position: 'relative', bottom: '15px', left: 0, width: '100%', height: '0.1rem', backgroundImage: 'linear-gradient(to right, red, red)' }} />
            </div>

            {/* Card 3*/}
            <div style={{ width: '220px', height: '110px', textAlign: 'left'}}>
                <div style={{ color: 'red', fontSize: '17px', fontWeight: '300', marginBottom: '20px' }}>Number of people working as ISL Translators</div>
                <div style={{ color: '#33D9E3', fontSize: '32px', fontWeight: '500', marginBottom: '20px' }}><Counting n={250}/></div>
                <div style={{ position: 'relative', bottom: '15px', left: 0, width: '100%', height: '0.1rem', backgroundImage: 'linear-gradient(to right, red, red)' }} />
            </div>
        </div>
    </div>
    </section>
  )
}
