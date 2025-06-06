import React, { useContext } from 'react'
import '../css/FoodDisplay.css'
import FoodItem from './FoodItem'
import { StoreContext } from '../context/StoreContext'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext)

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Around You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          {console.log(category, item.category)}
          if ( category === 'All' || category === item.category ) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
