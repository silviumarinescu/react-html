const Counter = styled.div`
  color: red;
  p {
    color: green;
    span {
      color: red;
    }
  }
  button {
    color: pink;
  }
`

export default (props) => {
  const [count, setCount] = React.useState(props.startCount)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <Counter>
      <p>
        You clicked <span>{count}</span> times
      </p>
      <button onClick={handleClick}>Click me</button>
    </Counter>
  )
}
