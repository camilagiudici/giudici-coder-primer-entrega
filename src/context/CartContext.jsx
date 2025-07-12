import {createContext, useState } from "react";

export const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [cart,setCart]= useState([])

    const addItem = (item,cantidad)=>{
        if (isInCart(item.Id)){
            // console.log('esta en el carrito')
            const carritoActualizado = cart.map((prod) => {

                if(item.Id === prod.id){
                    return{...prod,quantity: prod.quantity + cantidad}
                } else{
                    return prod
                }
            })
            setCart (carritoActualizado)
        }else{
    
            setCart([...cart,{...item,quantity:cantidad}])
        }
        // console.log("item:",item,'cantidad:',cantidad)
        // console.log({...item,quantity:cantidad})
         console.log("Producto agregado:", item, "Cantidad:", cantidad);
    }
    const removeItem=(id)=>{
        setCart(cart.filter((prod)=>prod.id !== id))
    }
    const clear =() =>{
        setCart([])
    }

    const isInCart=(id)=>{
        return cart.some((prod)=>prod.id === id)
    }
        return(
            <CartContext.Provider value={{cart,addItem}}>
                {children}
            </CartContext.Provider>
        )
}