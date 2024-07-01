import React from "react";
import AboutBanner from "../Components/AboutBanner/AboutBanner";
import aboutBannnerImage from '../assets/aboutBanner.jpg'
import aboutIntroImage from '../assets/about-page.jpg'
import aboutIntroImage1 from '../assets/about-page1.jpg'

const About = () => {

  return (
    <>
     <AboutBanner image={aboutBannnerImage} imageOne={aboutIntroImage1} imageTwo={aboutIntroImage} text='Something Different Is Happening Here'/>
    </>
  );
};

export default About;
