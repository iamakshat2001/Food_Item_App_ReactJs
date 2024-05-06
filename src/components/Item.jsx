import styles from './item.module.css';
const Item = ({  foodItem ,bought ,handleBuyButton}) =>{
  const st = {
    color:"blue",
    fontSize:"14px",
    fontFamily:"sans-sarif"
  }

  return ( //css module example 
    <>
   
  <li className={`${styles['ak-item']} style=${st} list-group-item ${bought && "active"}`}>
    {foodItem}
    <button className={`${styles.buttons} btn-btn-info`} onClick={handleBuyButton}>Buy</button>
  </li>

  </>);
}
export default Item;