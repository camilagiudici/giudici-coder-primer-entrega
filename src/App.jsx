import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Input from "./examples/Input";
import {CartProvider} from "./context/cartContext";
import CartContainer from "./components/CartContainer";
function App(){


return (
  
  <BrowserRouter>
  <NavBar/>
  <CartProvider>
  <Input/>
  <Routes>
    <Route path='/' element={<ItemListContainer saludo='Hola! ya sos un Halcomweb🦅'/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer saludo='Halcom🪽'/>}/>
    <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
    <Route path='/cart' element={<CartContainer/>}/>
    <Route path='*' element ={<ErrorPage/>}/>
   
  </Routes>
  </CartProvider>
  </BrowserRouter> 
)

}
export default App
