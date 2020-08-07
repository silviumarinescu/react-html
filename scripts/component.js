const Component1 = window.styled.div`
  color: red;
  p {
    color:green;
    span{
      color:red;
    }
  }
  button{
    color: pink
  }
`


export default (props) => {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  const a = { b: 'c' }
  const d = { ...a }

  return (
    <Component1>
      <p>You clicked {count} times <span>aaa</span></p>
      <button onClick={handleClick}>Click me</button>
    </Component1>
  )
}
