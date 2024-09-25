// import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

// eslint-disable-next-line react/prop-types, no-unused-vars
const FoodItems = ({id,name,price,description,image}) => {
  // const[itemCount,setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className="food-item">
        <div className="food-item-image-container">
            <img src={image} alt="" className="food-item-image" />
            {
              !cartItems[id]?<div className="add-btn"><img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white }/></div>
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItems