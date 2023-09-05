import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  console.log("🚀 ~ file: Cart.jsx:6 ~ Cart ~ products:", products)

  const handleRemove = (productId)=> {
     dispatch(remove(productId))
  }


  return (
    <div>
      
      
      <h3>Cart</h3>
      <div >
        {
            products.map(product => (
              <div key={product.id} className='cartCard'>
                <img src={product.image} alt=''/>
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button onClick={()=> handleRemove(product.id)} className='btn'>Remove</button>
                </div>
            ))
        }
      </div>



    </div>
  )
}

export default Cart