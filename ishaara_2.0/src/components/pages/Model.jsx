// eslint-disable-next-line no-unused-vars
import React from 'react';
import './../../css/model.css';
import F1 from './../../assets/f1.png';
import F2 from './../../assets/f2.png';
import F3 from './../../assets/f3.png';
import F4 from './../../assets/f4.png';
import F5 from './../../assets/f5.png';
import F6 from './../../assets/f6.png';
import {Footer} from "./";
export default function Modal() {
  return (
    <>
    <div className="title_heading">
      Model
    </div>
    <div className="row">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={F1}/>
            <p>SIGN TO TEXT</p>
          </div>
          <div className="card-back">
            <p>Automatically translates sign language gestures into written text</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={F2}/>
            <p>DEPTH DETECTION</p>
          </div>
          <div className="card-back">
            <p>Utilizes advanced technology to accurately detect the depth and position of sign language movements.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={F3}/>
            <p>GRAMATICALLY CORRECT</p>
          </div>
          <div className="card-back">
           <p>Ensures that the translated text maintains proper grammar and syntax.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={F4}/>
            <p>HIGH ACCURACY</p>
          </div>
          <div className="card-back">
            <p>Provides precise and reliable translations with minimal errors.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={F5}/>
            <p>LLM POWERED</p>
          </div>
          <div className="card-back">
            <p>Employs a Language Model with high proficiency and understanding, enhancing translation accuracy.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={F6}/>
            <p>UNIQUE MODEL</p>
          </div>
          <div className="card-back">
  <p>Utilizes a proprietary model specifically tailored for sign language translation, offering distinct advantages over conventional approaches.</p>
          </div>
        </div>
      </div>
   <Footer />
</div>
</>
  )
}
