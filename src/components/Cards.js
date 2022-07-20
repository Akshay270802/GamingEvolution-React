import React, { useEffect } from 'react';
import './Cards.css';
import {gsap, TimelineLite, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Cards() {

let t1= new TimelineLite({ delay: 0.3});

useEffect(() => {
  t1.from('.card', {y: 15, opacity: 0, ease: Power3, delay: 0.2 }, 'start');
  gsap.from('.cards__items', {
    duration: 1,
    y: '100',
    opacity: 0,
    ease: 'ease-in',
    scrollTrigger: {
      trigger: '.cards__items',
      start: 'top 80%',
    }
  })
}, []);

  return (
    <div className='cards'>
      <h1>AVAILABLE TOURNAMENTS</h1><hr className='hr-lines'></hr>
      <div className='cards__container'><hr></hr>
        <div className='hero-mid'></div>
        </div>
     </div>
  );
}

export default Cards;