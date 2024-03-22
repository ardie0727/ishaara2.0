// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
// import Translate from './Translate';
export default function Tryitnow() {
  return (
    <section id="try">
    <div style={{ fontFamily: 'Inter' }}>
      <div style={{ textAlign: 'center', fontSize: '55px', color: '#33D9E3', marginBottom:'20px'}}>
          <Link  style={{textDecoration:'none'}} to='/Translate' >TRY IT NOW</Link>        
      </div>
    </div>
    </section>
  )
}
