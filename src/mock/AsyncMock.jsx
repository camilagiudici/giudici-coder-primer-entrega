const productos = [
    {
        id: '01',
        name: 'Random 1',
        description: 'lorem lorem lorem',
        stock: 50,
        price: 2000,
        category: 'Ofertas',
        img: 'https://ambientegourmet.vtexassets.com/arquivos/ids/230320-800-auto?v=638802403302700000&width=800&height=auto&aspect=true',
        
    },
        {
        id: '02',
        name: 'Random 2',
        description: 'lorem lorem lorem',
        stock: 40,
        price: 2000,
        category: 'Ollas y Sartenes',
        img: 'https://ambientegourmet.vtexassets.com/arquivos/ids/234236-500-auto?v=638766910594300000&width=500&height=auto&aspect=true',
        
    },
        {
        id: '03',
        name: 'Random 3',
        description: 'lorem lorem lorem',
        stock: 30,
        price: 2000,
        category: 'Baterias',
        img: 'https://ambientegourmet.vtexassets.com/arquivos/ids/238481-800-auto?v=638814682396570000&width=800&height=auto&aspect=true',
        
    },
        {
        id: '04',
        name: 'Random 1',
        description: 'lorem lorem lorem',
        stock: 50,
        price: 2000,
        category: 'Accesorios',
        img: 'https://ambientegourmet.vtexassets.com/arquivos/ids/224921-800-auto?v=638442278011870000&width=800&height=auto&aspect=true',
        
    }
]
  let error=false
 export const getProducts = () =>{
return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        if(error){
            reject('Hubo un error')
        } else {
            resolve(productos)
        }
    },3000)
})
  }