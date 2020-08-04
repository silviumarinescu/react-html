import TestComponent from './component.js'

const App = () => (
  <div>
    Hello From React <TestComponent testProp="test"></TestComponent>
  </div>
)

ReactDOM.render(<App />, document.getElementById('App'))
