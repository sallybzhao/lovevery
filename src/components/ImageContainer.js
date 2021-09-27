import React from 'react'
import Slider from "react-slick"
import PropTypes from 'prop-types'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ImageContainer({ kit }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => <button {...props} className='slick-prev slick-arrow' />
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => <button {...props} className='slick-next slick-arrow' />

  return (
    <div className='image-container'>
      <Slider
        {...settings}
        nextArrow={<SlickArrowRight />}
        prevArrow={<SlickArrowLeft />}
      >
        {kit.images.map(filePath =>  {
          return <img src={filePath} alt='kit-carousel' key={filePath} />
        })}
      </Slider>
    </div>
  )
}

ImageContainer.propTypes = {
  kit: PropTypes.object.isRequired
}
