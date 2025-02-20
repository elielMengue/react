import { useState } from "react";

export default function Country() {

  const [capital, setCapital] = useState('');

  function findCapital(country) {

    const capitals = 
    {
      "Centrafrique": "Bangui",
      "Cameroon": "Yaoundé",
      "Soudan": "Khartoum",
      "Tchad": "N'Djamena",
      "France": "Paris"
    };
    
    setCapital(capitals[country]);
  }

  return (
    <>
      <div >
        <div>
          <button onClick={() => findCapital("Centrafrique")} >Centrafrique</button>
          <button onClick={() => findCapital("Cameroon")} >Cameroon</button>
          <button onClick={() => findCapital("Soudan")} >Soudan</button>
          <button onClick={() => findCapital("Tchad")}>Tchad</button>
          <button onClick={() => findCapital("France")}>France</button>
        </div>
        <p >Capitale : {capital}</p>
      </div>
    </>
  );
}