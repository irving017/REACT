import React from 'react'
import './Product.css'

const img = 'https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/4309/thumb/r_4309_1475600318.jpg'

const ProductoDisplay = ({name,price,picURL=img,color=[]})=>{
  return(
    <div className='productcard'> 
    <h2>{name}</h2>
    <h4>${price}</h4>
    <img src={picURL} alt="Sin imagen"/>
    {color.map((c,i)=><div className='colorsin' style={{backgroundColor:c}} ></div>)}
    </div>
  )
}

export default ProductoDisplay