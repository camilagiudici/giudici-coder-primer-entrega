import '../css/ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../mock/AsyncMock'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemListContainer = ({ saludo }) => {
  const [data, setData] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((respuesta) => {
        if (categoryId) {
          setData(respuesta.filter((prod) => prod.category === categoryId));
        } else {
          setData(respuesta)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div>
          <h1 className='text-danger'>{saludo}</h1>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
