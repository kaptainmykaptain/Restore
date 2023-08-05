import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { product } from "../../app/models/product";



export default function Catalog () {
  const [products, setproduct] =useState<product[]>([]);
    

  useEffect(() => {
    fetch('http://localhost:5000/api/Products').then(response => response.json()).then(data => setproduct(data))

  }, []);
 
  return ( 
     <ProductList products ={products}></ProductList>
  ) 
}