import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
const{addItem}=useContext(CartContext)
const [purchase,setPurchase]=useState(false)
const onAdd = (cantidad)=>{
  addItem(detail,cantidad)
  setPurchase(true)
}

  return (
    <div style={{padding:'2rem', flexDirection:'column',display: 'flex', alignItems: 'center'}}>
     <h2> Detalle del producto: {detail.name}</h2> 
     <img src={detail.img} alt={detail.name}/>
     <p> {detail.description}</p>
     <p>${detail.price},00</p>
     <p> Stock disponible: {detail.stock} </p>
      {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail