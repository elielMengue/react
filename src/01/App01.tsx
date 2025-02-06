// App01.tsx
import './style.css';
import logo from '../assets/logo.png';
import '../assets/fonts/poppins.css';
import { useState } from 'react';


export  function App01(){

    const [count, setCount] = useState(0);

    return(    
        <>

        <div className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="title">Mon premier composant react</h1>
        </div>

        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
            </button>
        </div>

        </>
        
    );
}

