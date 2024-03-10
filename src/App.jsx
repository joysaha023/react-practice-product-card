import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageCard from './PageCard'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  }, [])

  // console.log(products)






  return (
    <>
      <h1>Vite + React</h1>
      
     {products.map((item) =>(
      <PageCard product={item}></PageCard>
     ))}
    </>
  )
}

export default App
