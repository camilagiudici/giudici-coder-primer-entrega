import '../css/buttons.css'
import React,{useEffect, useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count,setCount] =useState(1)
    const sumar =()=>{
        if(count < stock){
            setCount (count + 1)
        }
    }
    const restar = () =>{
        if (count>0){
            setCount (count -1)
        }

    }
            const comprar = ()=>{

            onAdd(count)
            }
  return (
   <div>
  <div className="botones-contador">
    <button className="btn btn-danger btn-halcom" onClick={restar}>-</button>
    <span className="btn btn-halcom">{count}</span>
    <button className="btn btn-success btn-halcom" onClick={sumar}>+</button>
  </div>
  <div className="boton-comprar-contenedor">
    <button
      className="btn btn-primary btn-halcom"
      disabled={stock === 0} onClick={comprar}
    >
      comprar
    </button>
  </div>
</div>

  )
}

export default ItemCount