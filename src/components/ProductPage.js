import React, { useState } from 'react'
import { getProductData, getPlaceholderKit } from '../api.js'
import navBar from '../assets/navBar.png' 
import ImageContainer from './ImageContainer'
import ProductText from './ProductText'
import ArrowRight from '../assets/arrowRight'
import '../index.scss'

export default function ProductPage({ product }) {
  const [myProduct, setMyProduct] = useState(() => getPlaceholderKit())
  const [isPlaceholder, setIsPlaceholder] = useState(true)
  const productData = getProductData()

  const handleSubmit = (date) => {
    // set kit according to user's input
    const curDate = new Date()
    const day = 86400000 // 24h * 60min * 60s * 1000ms
    const monthAge = Math.floor(((curDate - date) / day) / 30)
    
    // handle cases where date is in the future or greater than 12 months
    const index = (date > curDate || monthAge < 3) 
      ? 0
      : (monthAge > 12) 
        ? 5
        : Math.ceil(monthAge/2) - 1

        setIsPlaceholder(false)
    setMyProduct(productData[index])
  }

  return (
    <div className='productPage'>
      <img src={navBar} alt='static-nav-bar' className='navBar'/>
      <div className='breadcrumbs'> Home <ArrowRight /> Play Kits <span> <ArrowRight /> </span> {myProduct.header} </div>
      <div className='content'>
        <ImageContainer kit={myProduct} />
        <ProductText kit={myProduct} onSubmit={handleSubmit} isPlaceholder={isPlaceholder} />
      </div>
    </div>
  )
}
