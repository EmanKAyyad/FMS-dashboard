import { useState } from 'react'
import './App.css'
import { MyButton } from 'shared-components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyButton />
    </div>
  )
}

export default App
