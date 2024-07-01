import './AboutBanner.css';

const AboutBanner = ({ image, imageTwo, imageOne, text }) => {
  return (
    <div className='about-banner-section'>
      <div
        className='about-banner-cont'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='banner-text-wrap'>
          <h1 className='about-banner-text'>{text}</h1>
        </div>
      </div>

      <div className='about-intro-section'>
        <div className='container w-container'>
          <div className='about-intro-wrap'>
            <div className='about-intro-grid w-layout-grid about-intro-image '>
              <div className='about-intro-image-wrap-one'>
                <img src={imageOne} alt={imageOne} />
              </div>
              <div className='about-intro-image-wrap-two'>
                <img src={imageTwo} alt={imageTwo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
