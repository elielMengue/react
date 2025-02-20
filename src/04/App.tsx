import { useState } from 'react';

export default function App(){

    const [count, setCount] = useState(0);

    const augmenter = () =>{

        setCount(count +1);

    }

    const diminuer = () =>{

        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={augmenter}>Augmenter</button>
            <div>Compteur : {count}</div>
            <button onClick={diminuer}>Diminuer</button>
        </div>


    )
}