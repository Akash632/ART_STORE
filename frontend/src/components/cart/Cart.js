import React from 'react';
import './Cart.css';
import cart from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom';
function Cart() {
    const navigate = useNavigate();
  return (
    <div className='cart-main-container'>
        <div className='cart-image-container'>
            <img src={cart} className='cart-image'/>
            <h1 className='cart-heading'>Oops! Your cart is empty</h1>
            <button className='cart-button' onClick={()=>navigate('/shop')}>Shop Now</button>
        </div>
    </div>
  );
}

export default Cart;
