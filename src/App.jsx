
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container';
import styles from './App.module.css'
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {

  //making list



  // let textStateArr = useState("Food Item is Entered By User!"); 
  // let textStateShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // alternate way of managing state li object destructring..
  // let [textStateShow,setTextState] = useState("Food Item is Entered By User!");

  // console.log(`Current value of textState is ${textStateShow}`);
 
  let [foodItems,setFoodItems] = useState([]);
  const onKeyDown = (event) =>{
        if(event.key === "Enter"){
          let newFoodItem = event.target.value;
          event.target.value = "";
          let newItems = [...foodItems,newFoodItem];
          setFoodItems(newItems);
        }
        console.log("second tile");
  };  
 
  // const handleOnChange= (event) => {
  //   console.log(event.target.value);
  //   setTextState(event.target.value);
  // };
  // Map method example


  // if(foodItems.length === 0){
  //   return <h1>I am Still Hungry!</h1>;
  // }

  return (<><Container>
  <h1 className={styles.heading}>Healty Food</h1>;
  <ErrorMessage items = {foodItems}></ErrorMessage>
  <FoodInput handleKeyDown={onKeyDown}></FoodInput>
  <FoodItems items = {foodItems}></FoodItems>
  </Container>
  {/* <Container>
    <h1>This is List of food items which is Good for you health!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus earum ab eum sapiente tempora quam quidem inventore illo veniam obcaecati natus, exercitationem sequi blanditiis perspiciatis dolor ipsam, magni deserunt fuga.
    </h1>
  </Container> */}
  </>
  );


//   fragmentation exapmle
//   return <>
//    <h1>Healty Food</h1>;
//    <ul class="list-group">
//   <li class="list-group-item">An item</li>
//   <li class="list-group-item">A second item</li>
//   <li class="list-group-item">A third item</li>
//   <li class="list-group-item">A fourth item</li>
//   <li class="list-group-item">And a fifth one</li>
// </ul>
// </>

//fragmentation exapmle with the help of <React.Fragment> tag
// return <React.Fragment>
//  <h1>Healty Food</h1>;
//  <ul class="list-group">
// <li class="list-group-item">An item</li>
// <li class="list-group-item">A second item</li>
// <li class="list-group-item">A third item</li>
// <li class="list-group-item">A fourth item</li>
// <li class="list-group-item">And a fifth one</li>
// </ul>
// </React.Fragment>

// fragmentation exapmle with the help of div but when react render this code then it automaticallyu make div root for wrappping all code
// return <div>
//  <h1>Healty Food</h1>;
//  <ul class="list-group">
// <li class="list-group-item">An item</li>
// <li class="list-group-item">A second item</li>
// <li class="list-group-item">A third item</li>
// <li class="list-group-item">A fourth item</li>
// <li class="list-group-item">And a fifth one</li>
// </ul>
// </div>
}

export default App;
