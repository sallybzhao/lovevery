import React from 'react'
import PropTypes from 'prop-types'
import Reviews from '../assets/reviews.png' 
import ProductBadges from '../assets/productInfo.png' 
import TruckIcon from '../assets/truck.svg' 

export default function ProductText({ kit, onSubmit, isPlaceholder }) {
  // special case for The Looker Play Kit: 0-12 weeks old
  const timePeriod = (kit.age === '0-12') ? 'weeks' : 'months'
  const buttonText = (isPlaceholder) ? 'Find My Kit' : 'Subscribe Now'

  const handleSubmit = (event) => {
    event.preventDefault()
    const date = new Date(event.target.date.value)
    if (isNaN(date)) {
      return
    } else {
      onSubmit(date)
    }
  }

  return (
    <div className='product-text'>
      <h1 className='header'> {kit.header} </h1>
      {!isPlaceholder && (
        <div className='tagline'>
          <img src={Reviews} alt='reviews' className='reviews tagline'/>
          <span className='divider'> | </span>
          <p className='tagline'> Suitable for {kit.age} {timePeriod} old </p>
          <span className='divider'> | </span>
          <p className='tagline'> Part of: <span className='mock-link'> Play Kit Subscription </span></p>
          <hr />
        </div>
      )}
      <div className='description'> {kit.description} </div>
      <img src={TruckIcon} alt='truck-icon' className='truck-icon'/>
      <span className='price'> $80/kit, only available in the Play Kit subscription </span>
      <form className='user-input-form' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label> Your child's name (optional) </label>
          <input type='text' name='name' />
        </div>
        <div className='form-field'>
          <label className='birth-label'> Birth date/Due date </label>
          <input type='date' name='date' />
        </div>
        <button className='submit-button' type='submit'> {buttonText} </button>
      </form>
      <div className='product-meta'>
        <span className='circle'></span> <p> Free shipping </p>
        <span className='circle'></span> <p> Cancel anytime </p>
        <span className='circle'></span> <p> Satisfaction guaranteed </p>
      </div>
      <img src={ProductBadges} alt='product-badges' className='product-badges'/>
    </div>
  )
}

ProductText.propTypes = {
  kit: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isPlaceholder: PropTypes.bool.isRequired,
}
