
import App4 from "./App4";


const countryData = [
    {
        pays:"Centrafrque",
        capital:"Bangui",
        population: 5000000,
        drapeau:"RENAISSANCE"
    },

    {
        pays:"Cameroon",
        capital:"Douala",
        population: 5000000,
        drapeau:"UNKNOWN"
    },

    {
        pays:"France",
        capital:"Paris",
        population: 5000000,
        drapeau:"UNKNOWN"
    },

    {
        pays:"ETHIOPIE",
        capital:"ADIS",
        population: 5000000,
        drapeau:"UNKNOWN"
    },

    {
        pays:"Allemagne",
        capital:"Berlin",
        population: 50006000,
        drapeau:"RENAISSANCE"
    },

    {
        pays:"TCHAD",
        capital:"N'DJAMENA",
        population: 456.0000,
        drapeau:"RENAISSANCE"
    },

    {
        pays:"Soudan",
        capital:"Khartoum",
        population:354.0000,
        drapeau:"RENAISSANCE"
    }
];

export default function Display(){

    const country = countryData.map((e, index) => (
        <App4 key={index} pays={e.pays} capitale={e.capital} population={e.population} drapeau={e.drapeau}/>
    ))
    return (
        <div>
            <h1>Liste des Pays</h1>
            {country}
        </div>
    )
}