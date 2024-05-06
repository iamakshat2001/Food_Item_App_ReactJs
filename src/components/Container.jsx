//EXAPMLE WITH DESTRUCTuring
import styles from './Container.module.css';
const Container = ({children}) =>{
  return <div className={styles.Container}>
    {children}
  </div>
}
export default Container;

// exapmle of passing children with proprs
// import styles from './Container.module.css';
// const Container = (props) =>{
//   return <div className={styles.Container}>
//     {props.children}
//   </div>
// }
// export default Container;