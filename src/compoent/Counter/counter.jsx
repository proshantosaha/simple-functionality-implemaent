import React, { useState } from 'react'


const Counter = ({name,stock}) => {

    const [count, setCount] = useState(0)



    const increment = () =>{
        if (count < stock){
            setCount( count + 1)
        }
    console.log(count);
    }

    const dcrement = () =>{
        if (count > 0){
            setCount( count - 1)
        }
        console.log(count);
        }


  return (
      <div>
        <p>{name}</p>

        <p>{count} / {stock}</p>


        <button onClick={increment} disabled={count==stock}>increment</button>
        <button onClick={dcrement } disabled={count==0}>dcrement</button>



        {count >= 10 &&(
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Beatae error ab, modi adipisci iste mollitia.</p>
        )}
     </div>     


    
  )
}

export default Counter