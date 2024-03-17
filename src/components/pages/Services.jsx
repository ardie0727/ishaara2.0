// eslint-disable-next-line no-unused-vars
import React from 'react'
import Example from './../../../public/assets/images/example.png'
import Arrow from './../Arrow'
// import Example1 from './../assets/example1.png'
// import Example2 from './../assets/example2.png'
export default function Services() {
  return (
      <section id="team">
    <div style={{ marginTop: '85px',fontFamily: 'Inter' }}>
        <div style={{ textAlign: 'left', fontSize: '50px', color: '#EA6C25', marginBottom:'20px', marginLeft:'40px'}}>
        NO WORRIES , ISHAARA AI WILL BRIDGE <br/>THE GAP FOR YOU
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}> 
            {/* Card 1*/}
            <div style={{ width: '220px', height: '220px', textAlign: 'center', padding: '20px', marginRight:'5px'}}>
                <img src={Example} style={{ width: '163px', height: '163px', marginBottom: '20px'}} alt="team image" />
                <div style={{ color: 'red', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>Your Sign</div>
            </div>

            <div style={{ width: '110px', height: '220px', textAlign: 'center', padding: '20px', margin:'0px 5px'}}>
                <Arrow/>
            </div>

            <div style={{ width: '220px', height: '220px', textAlign: 'center', padding: '20px', margin:'0px 5px'}}>
                <img src={Example} style={{ width: '163px', height: '163px', marginBottom: '20px'}} alt="team image" />
                <div style={{ color: 'red', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>Your Sign</div>
            </div>

            <div style={{ width: '110px', height: '220px', textAlign: 'center', padding: '20px', margin:'0px 5px'}}>
                <Arrow/>
            </div>

            <div style={{ width: '220px', height: '220px', textAlign: 'center', padding: '20px', marginLeft:'5px'}}>
                <img src={Example} style={{ width: '163px', height: '163px', marginBottom: '20px'}} alt="team image" />
                <div style={{ color: 'red', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>We Translate!</div>
            </div>
    </div>
    </div>
    </section>
  )
}
