import Bienvenue from "../02/Bienvenue";
import Etudiant from "../02/Etudiant";

export default function App(){


        const Etudiants = (
            <div>
                <h1>Les Etudiants</h1>
                <Etudiant nom="Eliel MENGUE" classe="Terminale" age={25} /> 
                <Etudiant nom="Eliel MENGUE" classe="Terminale" age={10} /> 
           </div>
            );
        
          const data = [1,2,3,4,5];
          const data2 = ["Alban", "Eliel", "Heritier"];

          const data02 = [

            {
                id:1, 
                nom:"Eliel", 
                age:13
            },

            
            {
                id:2, 
                nom:"MENGUE", 
                age:20
            },

            
            {
                id:3, 
                nom:"Elvis", 
                age:25
            }
          ];

          const listEtudiant = data.map((valeur, index) =>
             (
                <div key={index}>{valeur}</div>
            )
        )

        const listNom = data2.map((nom, index) => (

            <Bienvenue key={index} nom={nom} />
        ))
          
    return (
                <div>
                    {listEtudiant}
                    {listNom}
                </div>
    )
}