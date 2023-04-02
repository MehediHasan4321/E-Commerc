import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
function App() {
  const [addProdcut, setAddProduct] = useState(1)
  const [count,setCount] = useState(localStorage.getItem('cartAdded'))
  const handleAddToCart = (id) => {
    setAddProduct(addProdcut + 1)
    localStorage.setItem('cartAdded',addProdcut)
    setCount(localStorage.getItem('cartAdded'))
  }

  return (
    <div className="App">
      <Header productCount={count} />
      <Main handleAddToCart={handleAddToCart} />
    </div>
  )
}

export default App
