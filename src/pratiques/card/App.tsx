import Card from "./Card"


const App = () =>{

    return(
        <>
             <Card 
        imageUrl={"../assets/logo.png"} 
        name={"edev"} 
        role={"Entreprise"} 
        description={"edev est une entreprise centrafricaine du digitale. Nous offrons des solutions digitales SMART et sur mesure pour vos besoins"} 
        />

        <Card 
        imageUrl={"../assets/logo.png"} 
        name={"Eliel Mengue"} 
        role={"Developpeur Full Stack"} 
        description={"Passioné par les technologies web et les frameworks modernes"} 
        />
        </>
       
    );
}


export default App;