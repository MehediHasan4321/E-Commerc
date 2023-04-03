import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import { Outlet } from 'react-router-dom'
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
      <Outlet/>
      <Main handleAddToCart={handleAddToCart} />
    </div>
  )
}

export default App
