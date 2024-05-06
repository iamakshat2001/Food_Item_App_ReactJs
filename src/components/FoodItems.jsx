import Item from './Item';
import styles from './FoodItems.module.css';
import { useState } from 'react';
const FoodItems = ({ items }) => {

  const [activeItem , setActiveItem] = useState([]);
  const onChange = (event , item) =>{
      let newItem = [...activeItem,item];
      setActiveItem(newItem);
  }
  return(
  <ul className={`${styles.FoodItems} list-group`}>
    {items.map((item) =>
    <Item 
    key={item}
    bought = {activeItem.includes(item)}  
    foodItem={item}
    handleBuyButton = {(event) => onChange(event,item)}
    ></Item>
    )};
 </ul>
 );
};
export default FoodItems;