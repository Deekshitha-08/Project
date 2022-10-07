
import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
// import './Product.css';
import axios from "axios";



const Cart = ({plants}) => {
  const location = useLocation()
  const { from } = location.state
    const navigate=useNavigate()
    const [cartitems, setcartitems] = useState([]);
    console.log(plants);

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0)==' ') c = c.substring(1);
           if(c.indexOf(name) == 0)
              return c.substring(name.length,c.length);
        }
        return "";
   }
    

return(
    <div>
        {getCookie("accessToken")&&
        
         <div className="CartPage">
         
         <div className="LeftContainer">
         <div className="CartItems">
         <h1>Cart</h1>
            <h3>Product : {from.product_name}</h3>
             <img id="cartimage" src={from.image} />
             <h4>Quantity : {from.quantity}</h4>
             <h4>Total Amount</h4>
            <div>Rs.{from.price}</div>
            <Link to="/checkout"><button>Check Out</button></Link>
            </div>
            </div>
  

            
            </div>
    
        }
        {
            !(getCookie("accessToken"))&&
            navigate('/cart')
        }
                     </div>                  
);
};
export default Cart;