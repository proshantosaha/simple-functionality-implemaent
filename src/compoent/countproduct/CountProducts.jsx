import React, { useState } from 'react'
import productList from './productlist'
import TableRow from './TableRow'

const CountProducts = () => {

  const [products,setProducts] = useState(productList.map((item)=>{
     return{
      ...item,
      quantity:0,
      total:0,
       };
      
     }));

     
     const increment =(id) =>{
           setProducts(
            products.map((product)=>{
              if(id===product.id && product.stock>product.quantity){
                product.quantity++
                  product.total=product.quantity * product.price
              }

              return product

            })
           )
     };


     const decrement =(id) =>{
      setProducts(
       products.map((product)=>{
         if(id===product.id && product.quantity >0){
           product.quantity--
             product.total=product.quantity * product.price
         }

         return product

       })
      )
}

     

  
  return (
    <div>
      <table>  
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product)=>(
                  <TableRow key={product.id} {...product} increment={increment} decrement={decrement}/>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default CountProducts