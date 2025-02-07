
import '../assets/fonts/poppins.css';

interface Props{

    pays: string
    capitale: string
    population: number,
    drapeau: string
}

export default function DataCountry(props: Props){

    return(

        <div style={
            { padding: 20, border:1, background:"#61dafbaa", margin:5, borderRadius:20, width:500, fontFamily:"Poppins"}
        }>
            <strong>Pays:</strong> {props.pays} <br />
            <strong>Capitale :</strong> {props.capitale}  <br />
           <strong> Population: </strong>{props.population} <br />
           <strong> Drapeau: </strong>{props.drapeau} <br />
        </div>
    )
}