export default (props) => {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
