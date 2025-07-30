import React, { useState,useEffect } from 'react';
import axios from 'axios';


export default function FetchProduct() {
  const [products,setProducts] = useState([]);

    async function fetchUsers(){
        try{

            let response = await axios.get('https://fakestoreapi.com/products');  
            setProducts([...response.data]);


        } catch(err){
            console.log('Something went wrong...',err);
        }

    }

  useEffect(()=>{
    fetchUsers()
  },[]);

  return (
    
    <>
        
        <div className="row">
            {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text">${product.price}</p>
                    <p className="text-muted" style={{ fontSize: '0.85rem' }}>{product.category}</p>
                </div>
                </div>
            </div>
            ))}
        </div>

        
    </>

  );
}
