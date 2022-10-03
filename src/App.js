import logo from './logo.svg';
import './App.css';
import { products } from './assignment';
//import Greeting from './components/Greetings';

import ProductCard from './components/ProductCard';
import { useMemo, useState } from 'react';
import { compose } from 'underscore';
import useMyMemo from './hooks/useMyMemo';

// const users=[
//   {
//   firstName :"Abhishek" ,
//   lastName:"Hamilpur",
//   },
//   {
//     firstName :"Simran" ,
//     lastName:"Hamilpur",
//   },
//   {
//     firstName :"Abhimanyu", 
//     lastName:"Hamilpur"
//   }
// ]

 const App=() =>{

  const [exclude,setExclude]=useState(false);
  const [show,setShow]=useState(true);

  function handleChange(event){
    setExclude(event.target.checked);

  }

  function handleShowChange(event){
    setShow(event.target.checked);

  }

  function getFilteredProduct(){
    console.log("getFilteredProduct");
    return products.filter(product=>{
      if(exclude)
      return product.stock>0;
      else
      return true;
    })

  }
  // const filteredProduct=useMemo(getFilteredProduct,[exclude]);
  /* calling custom hook "useMyMemo" */
  const filteredProduct=useMyMemo(getFilteredProduct,[exclude]);
  //const filteredProduct=getFilteredProduct();

  //console.log("filteredProduct",filteredProduct)
  //console.log(exclude);

  return (
   <div className="App">

    <div className="filter">
      <label>
        <input 
        type="checkbox"
        checked= {exclude}
        onChange={handleChange}
        />
        Exclude out of stock
      </label>

    </div>
    <div className="show">
      <label>
        <input 
        type="checkbox"
        checked= {show}
        onChange={handleShowChange}
        />
        Show/Hide image
      </label>

    </div>

    <div className="product">
    {
    filteredProduct.map(product => (
      <ProductCard title={product.title} 
                  image={product.image} 
                  price={product.price}
                  stock={product.stock}
                  show={show}/>))
    }
    </div>
      
    </div>
      
  )
    
 };




export default App;
