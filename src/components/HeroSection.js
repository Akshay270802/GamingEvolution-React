

import React , { useRef, useEffect }from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import { Scroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import user1 from './images1/user.png';
import sword1 from './images1/sword.png';
import trophy1 from './images1/trophy.png';



function HeroSection() {


  return (
<>
    <div className='hero-container'>
      <motion.h1 initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.7, duration: 0.7}} >EVOLVE YOUR <br></br>GAMING EXPERIENCE</motion.h1>
      <motion.p initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.9, duration: 0.7}} >Play with friends or compete against rivals from around the world</motion.p>
      <div className='hero-btns'>
        <motion.div className="btn-1" initial={{x: -150, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 1.1, duration: 0.7}}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          JOIN NOW
        </Button>
        </motion.div>
      </div>
      <div className='hero-image'></div>
    </div>

    <div className='hero-midsection-container'>
      <div className='hero-midsection-row'>
      <div className='hero-midsection-column1'><img src={user1} alt="this is user image" />
      <h2>Sign Up</h2><p>Create your account </p></div>
      <div className='hero-midsection-column1'><img src={sword1} alt="this is sword image" />
      <h2>Compete</h2><p>Join Tournaments to compete with others</p></div>
      <div className='hero-midsection-column1'><img src={trophy1} alt="this is trophy image" />
      <h2>Win&Earn</h2><p>Win and earn in the form of crypto</p></div>
    </div>
    </div>
   
    </>
  );
}

export default HeroSection;
