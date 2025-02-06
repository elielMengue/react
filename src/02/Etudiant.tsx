import '../assets/fonts/poppins.css';

interface Props{

    nom: string
    classe: string
    age: number
}

export default function Etudiant(props: Props){

    return(

        <div style={
            { padding: 20, border:1, background:"#61dafbaa", margin:5, borderRadius:20, width:500, fontFamily:"Poppins"}
        }>
            <strong>Nom:</strong> {props.nom} <br />
            <strong>classe :</strong>c {props.classe}  <br />
           <strong> age: </strong>{props.age}
        </div>
    )
}