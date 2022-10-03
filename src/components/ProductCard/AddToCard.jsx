import { useState } from "react";
function AddToCard() {

    const [quantity,SetQuantity] = useState(0);

    function increamentQuantity(){
        SetQuantity(quantity+1);
    }

    function decreamentQuantity(){
        if(quantity>0){
            SetQuantity(quantity-1);
        }
        
    }

    if(quantity>0){

        return (
            (
                <div className="product-card-counter">
                    Quantity is {quantity}
                    <br/>
                <button className="product-card-cta"
                onClick={decreamentQuantity}
                >
                -
                </button>

                <button className="product-card-cta"
                onClick={increamentQuantity}
                >
                +
                </button>

                </div>
            )
        );
    }
    else{
        return (
            <button className="product-card-cta"
            onClick={increamentQuantity}
            >
            Add to card
            </button>
        );

    }
    
}
export default AddToCard;