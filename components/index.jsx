import Counter from './counter.jsx'

const GlobalStyle = styled.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap');
  body {
    background-color: lightblue;
    font-family: 'Work Sans', sans-serif;
  }
`

const App = () => (
  <div>
    <GlobalStyle />
    <Counter startCount={7} />
  </div>
)

export default App
