import { useState } from 'react'
import Layout from './Components/Layout'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Layout>
        <Home/>
      </Layout>
    </div>
  )
}

export default App
