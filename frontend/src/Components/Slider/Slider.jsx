import './Slider.css';
import slideOneImage from '../../assets/heroslider1.jpg';
import slideTwoImage from '../../assets/heroslider2.jpg';
import slideThreeImage from '../../assets/heroslider3.jpg';
import { useEffect, useState } from 'react';
import Slide from '../Slide/Slide';

const Slider = () => {
  const [displayNum, setDisplayNum] = useState(0);

    const handleDisplayNumChange = () => {
      setDisplayNum((displayNum) => (displayNum < 2 ? displayNum + 1 : 0));
    };

    useEffect(() => {
      const interval = setInterval(() => {
        handleDisplayNumChange();
      }, 5000);

      return () => clearInterval(interval);
    }, []);
 
  return (
    <div className='slider-section'>
      <div className='slider-overall'>
        <Slide
          image={slideOneImage}
          text='Keep Your Body Fit & Strong With Us'
          active={displayNum === 0}
        />
        <Slide
          image={slideTwoImage}
          text="FitnessFit It's More Than Just A Gym"
          active={displayNum === 1}
        />
        <Slide
          image={slideThreeImage}
          text='Fitness Gym With Well Health Rating'
          active={displayNum === 2}
        />
      </div>
    </div>
  );
};

export default Slider;
