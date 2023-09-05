import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add } from '../store/cartSlice';
import { STATUSES, fetchProducts } from '../store/productsSlice';




const Products = () => {

    const dispatch =  useDispatch()
    const {data : Products ,status} = useSelector((state)=> state.product)
   
    // const[Products,setProducts] = useState([]);

    useEffect(()=>{
          // const fetchProducts = async () => {
          //       const res = await fetch('https://fakestoreapi.com/products')
          //       const data = await res.json()
          //       console.log("🚀 ~ file: Products.jsx:11 ~ fetchProducts ~ data:", data)
          //       setProducts(data)    
          
          //   } 
          
          // fetchProducts()
          dispatch(fetchProducts());


    },[])

    const handleAdd = (product)=>{
      dispatch(add(product))

    }

    if (status === STATUSES.LOADING) {
       return <h2>Loading... </h2>
    }
    if (status === STATUSES.ERROR) {
       return <h2>Something Wrong </h2>
    }



  return (
    <div className='productsWrapper '>
        {
           Products.map(product=>(
            <div className='card' key={product.id}>
                <img src={product.image} alt ="" />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={()=> handleAdd(product)} className='btn'>Add to Cart</button>

            </div>
           )) 
        }

    </div>
  )
}

export default Products