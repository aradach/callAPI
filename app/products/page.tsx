"use client"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface ProductItem {
    id: number;
    title: string;
    price: number;
    image: string
}

const Productpage = () => {
  const [products, setProducts] = useState<ProductItem[]>([])
        const url = "https://fakestoreapi.com/products?limit=10"
  
        useEffect(()=>{
            const fetchProduct = async() =>{
                const res = await fetch (url);
                const data:ProductItem[] = await res.json();
                setProducts(data)
                console.log(data)
            };
            fetchProduct();
        },[]);
  
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product:ProductItem)=>(<ProductCard key={product.id} product={product}></ProductCard>))}
            </div>  
        )
}
export default Productpage