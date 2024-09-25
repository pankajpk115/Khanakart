// import React from 'react'
import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItems from '../FootItems/FoodItems';
// import { food_list } from '../../assets/assets';



// eslint-disable-next-line react/prop-types
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
        <h2>Top dishes for you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              if(category==='All' || category === item.category){
                return<FoodItems key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
              }
            })}
        
        </div>
    </div>
  )
}

export default FoodDisplay