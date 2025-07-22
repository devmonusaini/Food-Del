import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import FoodCard from '../FoodCard/FoodCard';
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  

  // If category is given, filter by category; else show all items
  const filteredFood = category==="All"
    ?food_list 
    :food_list.filter((item) => item.category === category) ;

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFood.map((item, index) => (
          <FoodCard
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
