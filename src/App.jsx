
import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner-Section/Banner'
import Navbar from './Component/Navbar/Navbar'
import Products from './Component/Products/Products'
import Card from './Component/Card/Card'
import Started from './Component/Started/Started'
import Pricing from './Component/Pricing/Pricing'
import Workflow from './Component/Workflow/Workflow'
import Futter from './Component/Futter/Futter'

const getProducts = async() => {
  const res = await fetch("/products.json")
  return res.json()
}

const productsPromise = getProducts()

function App() {

  const [activeTab, setActiveTab] = useState('products');
  
  const[cards, setCards] = useState([])
  


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" 
  name="my_tabs_1" 
  className="tab rounded-full w-40" 
  aria-label="Products"
  onClick={()=>setActiveTab('products')}
  defaultChecked 
  />
 

  <input type="radio" 
  name="my_tabs_1" 
  className="tab rounded-full w-40" 
  aria-label={`Cart (${cards.length})`}
  onClick={()=>setActiveTab('card')}
  />
  
 
</div>

    { activeTab === "products" && <Products productsPromise={productsPromise} cards={cards} setCards={setCards}></Products>}
     

    { activeTab === "card" && <Card cards={cards}
    setCards={setCards}/>}
<Started></Started>
<Pricing></Pricing>
<Workflow></Workflow>
<Futter></Futter>


    </>
  )
}

export default App
