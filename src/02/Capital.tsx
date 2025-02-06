
import '../assets/fonts/poppins.css';

export default function Capital(props: {pays: string, ville:string}){

    return(
        <div style={{fontFamily:"Poppins"}}>
            La capital de {props.pays} est {props.ville} 
        </div>
    )
}