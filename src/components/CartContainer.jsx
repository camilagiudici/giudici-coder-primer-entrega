import React, { useContext } from 'react'
import EmpyCart from './EmpyCart'
import CartView from './CartView'
import { CartContext } from '../context/cartContext'

const CartContainer = () => {
    const{cart}=useContext(CartContext)
  return (
    <>
    {
    !cart.length ? <EmpyCart/> : <CartView/>
    }
    </>
  )
}

export default CartContainer