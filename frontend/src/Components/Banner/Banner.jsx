import './Banner.css';

const Banner = ({ image, text }) => {
  return (
    <div className='banner-cont' style={{ backgroundImage: `url(${image})` }}>
      <div className='banner-text-wrap'>
        <h1
          className='banner-text'
          style={{
            opacity: 1,
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {text}
        </h1>
        <h1
          className='banner-border-text'
          style={{
            opacity: 1,
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
