import React from 'react'
import Item from './Item'

const ItemList = ({ data }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {data.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemList