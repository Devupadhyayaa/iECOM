import { useState,useEffect } from 'react'
import Cards from './components/cards'
import Navbar from './components/Navbar';
function App() {
  const [products , setProducts] = useState([]);
  useEffect(() => {
    async function call(){
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      setProducts(data);
    }
    call();
  }, [])
  
  return (
    <>
      <Navbar/>
      <div className="container grid grid-cols-4 gap-[20px] md:w-[95vw] max-w-[90vw] justify-items-center mx-auto mt-[150px] mb-[100px] bg-[grey] p-[20px] rounded-[20px]">
      {
        products.map((product)=>{
          return <Cards id={product.id} title={product.title} img={product.image} desc={product.description} price={product.price} key={product.id}/>
        })
      }
      </div>
    </>
  )
}

export default App
