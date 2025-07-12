import React, { useEffect, useState } from 'react'
import { getProducts } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import Item from './Item'

const ItemDetailContainer = () => {
  const [detail, setDetail]=useState({})
  const [cargando,setCargando]=useState(false)
  const {id}= useParams()

  useEffect (() =>{
    setCargando(true)
    getProducts()
    .then((respuesta) => setDetail(respuesta.find ((item)=> item.id===id)))
    .catch ((error) => console.log(error))
    .finally(()=> setCargando(false))
  },[])

  return (
    <>
    {cargando ? <LoaderComponent/> :<ItemDetail detail={detail}/>}
    </>
  )
}

export default ItemDetailContainer