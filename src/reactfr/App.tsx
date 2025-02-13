import { SetStateAction, useState } from 'react';


export default function NameForm(){

    const [name, setName] = useState('');

    const handleInput = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value);
    };

    return (

        <div>
            <h1>your text : {name ? name : ''} !</h1>
            <input 
                type='text'
                value={name}
                onChange={handleInput}
                placeholder='enter a text'
            />
        </div>
    )
}