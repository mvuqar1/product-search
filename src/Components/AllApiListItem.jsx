import React from 'react'
import { Link } from 'react-router-dom'


export default function AllApiListItem(props) {
    const { id,title,image,price,description } = props
    return (
        <div className='product-item'>
            <div className='product-item-title'>{title}</div>
            <Link className='product-item-image-container'  to={`/products/${id}`}><img className='product-item-image' src={image} alt={title}/></Link>
            <Link className='product-item-open' to={`/products/${id}`}>Open Product</Link>
            <p className='product-item-info'>{description.slice(0,250)}...</p>
            <span className='product-item-price'>{price} AZN</span>
        </div>
    )
}
