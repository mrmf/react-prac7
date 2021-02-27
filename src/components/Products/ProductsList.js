
import React, { useEffect, useState } from "react";

import { Link} from 'react-router-dom'
import Product from "./Product"

export default function ProductsList(props)  {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/`)
        .then((res) => res.json())
        .then((result)=> setProducts(result));
          
    },[]);
 return (
  <div>
  { 
    Products.map((itemInfo, index) => {
      return ( 
        <div className="row" key={index}>
              
                <div className="col-md-2">   
                    <img src={itemInfo.image} alt="" height="100" />                                          
                </div>
                <div className="col-md-6">
                  {itemInfo.title}
                </div>
                  {/* <Product id={itemInfo.id} items={itemInfo} />  */}
                 <div className="col-md-4">
                 <Link  to = {"/product/" + itemInfo.id} > Show Details </Link>
                 </div>

         </div>
      )})

  }
  </div>
    
  )
}