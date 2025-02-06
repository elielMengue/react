import Capital from "./Capital";
import Etudiant from "./Etudiant";
import Bienvenue from "./Bienvenue";


export default function App02(){

    const Capitale = (
        <div>
            <h1> Les capitales</h1>
            <Capital pays="RCA" ville="Bangui" />
            <Capital pays="France" ville="Paris" />
            <Capital pays="Cameroon" ville="Douala" />
         </div>

    );
    

    const Etudiants = (
    <div>
        <h1>Les Etudiants</h1>
        <Etudiant nom="Eliel MENGUE" classe="Terminale" age={25} /> 
        <Etudiant nom="Eliel MENGUE" classe="Terminale" age={10} /> 
        <Etudiant nom="Eliel MENGUE" classe="Terminale" age={15} /> 
   </div>
    );

    const Hello = (

        <div>
        <h1> Wecome message </h1>
            <Bienvenue lang="en" nom="Eliel Mengue"></Bienvenue>
    </div>

    );

    return(

        <div>
            {Capitale}
            {Etudiants}
            {Hello}

        </div>  
    );
}
