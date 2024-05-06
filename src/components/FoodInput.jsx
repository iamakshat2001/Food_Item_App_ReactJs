import styles from './FoodInput.module.css';
const FoodInput = ({ handleKeyDown }) => {
    console.log(handleKeyDown);
    return <input type="text" placeholder="Please Enter Food Item Here!" className={styles.foodInput}
    onKeyDown={(handleKeyDown)}
    />
}
export default FoodInput;