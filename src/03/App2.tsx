import Etudiant from "../02/Etudiant";


const studentList = [
    {
        nom:"Eliel",
        classe:"Terminale",
        age:21
    },
    {
        nom:"Eliel",
        classe:"Terminale",
        age:21
    },
    {
        nom:"Eliel",
        classe:"Terminale",
        age:21
    }
];

export default function App2(){

    const etudiants = studentList.map((e, index) => (

        <Etudiant key={index} nom={e.nom} classe={e.classe} age={e.age} />
    ))

    return (
        <div>
            <h1>Liste des Etudiants</h1>
            {etudiants}
        </div>
    )
}

