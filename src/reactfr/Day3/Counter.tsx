import { useState } from 'react';


const Counter = () =>{

    const [count, setCount] = useState(0);

    const [inputValue, setInputValue] = useState(1);

    const increment = () =>{

        setCount(count + inputValue);
    };

    const decrement = () =>{
        setCount(count - inputValue);
    }; 


    return (

        <div>
           <h2> count : {count} </h2>
           <input 
                type='number'
                value={inputValue}
                onChange={(e)=> setInputValue(Number(e.target.value))}
            />
           <button onClick = {increment}>Increment</button>
           <button onClick = {decrement}>decrement</button>
        </div>
    )

}


export default Counter;