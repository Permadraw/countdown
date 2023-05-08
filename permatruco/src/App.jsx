import { useState } from 'react'
import { Count } from './pages/Count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Count />
    </>
  )
}

export default App
