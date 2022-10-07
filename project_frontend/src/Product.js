import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './Product.css';
import axios from "axios";
import Cart from "./Components/Cart";

const Product = () => {

  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [flag,setFlag] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/product_details")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setProduct(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  const saveProduct =(plants)=>{

       setFlag(plants);
    }

  return (
    <div className="Product">
      <div className="ProductPageContainer">
        <div className="filterContainer">
          {/* <button>Filter</button> */}
        </div>
        <div className="productList">
          {product && flag.length<1 &&
            product.map((plants) => {
              return (
                <div key={plants.id} className="productCard">
                  
                  <img
                    src={plants.image}
                    className="productImage"
                    width={250} height={250}
                  />
                  <div>
                    {plants.product_name} - Rs. {plants.price}/-
                  </div>
                  
                  <Link to="/cart" state={{ from: plants }} >
                  { <button type="button" class="button">Add to Cart</button>  }
{/*                   
                 <button onClick={()=> saveProduct} >Add To Cart</button>
                  <button onClick={()=>saveProduct(plants)}> Add to Cart</button> */}
                  </Link>
                  
                  
                </div>
              );
            })}
            {/* {console.log(flag)}
            {flag && 
            // <h1>{flag}</h1>
            <Cart plants={flag} />
            
            } */}
        </div>
      </div>
    </div>
  );
};

export default Product;


