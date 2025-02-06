import '../assets/fonts/poppins.css';
interface Props{

    lang?:string,
    nom:string
}

export default function Bienvenue(props: Props)
{
    const {lang, nom} = props;

    if(lang == "en"){
        
        return <div style={{fontFamily:"Poppins"}}>Welcome : <strong>{nom}</strong></div>
    }

    return (

        <div style={{fontFamily:"Poppins"}}>
            Bienvenu : <strong>{nom}</strong> 
        </div>
    )
}
