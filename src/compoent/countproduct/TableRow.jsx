import React from 'react'

const TableRow = ({id,name,stock,price,quantity,total,increment,decrement}) => {
  return (
     <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{stock}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{total}</td>

        <td>
            <button disabled={quantity===stock} onClick={()=>increment(id)}>+</button>
            <button disabled={quantity==0} onClick={()=>decrement(id)}>-</button>
        </td>
     </tr>
  )
}

export default TableRow