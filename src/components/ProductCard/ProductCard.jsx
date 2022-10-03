import './ProductCard.css'
import { useState } from 'react';
import AddToCard from './AddToCard';
function ProductCard({title,image,price,stock,show}) {
    //console.log("product card",{show});

    return (
        
       
        <div className="product-card">
           
           {
           show ? (
           <img 
            alt={title}
            className="product-card-img"
            src={image}>
            </img>
            ):null
           }
            
        
            <div className="product-card-details">
                <div className="product-card-title">
                    {title}
                </div>
            </div>
            <div className="product-card-details">
                <div className="product-card-stock">
                 {stock} stock present 
                </div>
            </div>

            <div className="product-card-price">
                Rs. {price}
            </div>
            <br/>
            <AddToCard/>
            
        </div>
        
    );
    
}

export default ProductCard;