//Destructing method when we directly using value in curle brackets
const ErrorMessage = ({items}) => {
  return <>
  {items.length === 0 && <h1>I am Still Hungry!</h1>}
  </>;
}
export default ErrorMessage;