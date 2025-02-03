// App01.tsx
import './style.css';
import logo from '../assets/logo.png';
import '../assets/fonts/poppins.css';

export  function App01(){

    return(
        <>
        <div className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="title">Mon premier composant react</h1>
        </div>

        </>
        
    );
}

