import React, { useState } from 'react'


const Counter = () => {

    const [count, setCount] = useState(0)



    const increment = () =>{

        if (count < 10){
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
      {count}
      <button onClick={increment} disabled={count==10}>increment</button>
      <button onClick={dcrement } disabled={count==0}>dcrement</button>



      {count >= 10 &&(
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Beatae error ab, modi adipisci iste mollitia.</p>
      )}

      




    </div>
  )
}

export default Counter