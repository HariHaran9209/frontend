import React, { useContext } from 'react'
import '../css/FoodItem.css'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({ id, name, price, description, image}) => {

  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

  const inCart = cartItems && cartItems[id]

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" />
        {!inCart
          ? <img src={assets.add_icon_white} onClick={() => addToCart(id)} className="add" />
          : <div className="food-item-counter">
              <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
              <p>{inCart}</p>
              <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="fod-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
