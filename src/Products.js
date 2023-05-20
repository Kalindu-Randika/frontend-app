import React from "react";
import Product from './Product'
import './Products.css'

const DummyProducts = [{
    name: "Mobile Phone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80", 
    description: "This is a mobile",
    quantity: 12},

    {
        name: "Mobile Phone",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        description: "This is a mobile",
        quantity: 12},

        {
            name: "Mobile Phone",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80", 
            description: "This is a mobile",
            quantity: 12}

]



function Products(){

return (
   <div className="product-list">
        {DummyProducts.map((product,key) => 
        <ul>
        <li key={key}> 
            <Product id={key} name={product.name} image={product.image} description={product.description} /> 
         </li>
         </ul>
        )
        }
   </div>

); 



}

export default Products; 