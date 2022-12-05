import React from 'react';
import "./Subtotal.css";

import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";



function Subtotal() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className="subtotal">
           
            <button> Proceed to Checkout</button>   
        </div>
    );
}

export default Subtotal
