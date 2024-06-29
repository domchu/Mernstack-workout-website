import PropTypes from 'prop-types';

function Slide({ image, text, active }) {
  return (
    <div className={`slider-container ${active ? 'active' : ''}`}>
      <div className='slide' style={{ backgroundImage: `url(${image})` }}>
        <div className='slide-text-wrap'>
          <h1 className='slideText'>{text}</h1>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Slide;
