
import './Card.css';
import image from '/ikoue/react/vite-project/src/assets/logo.png';
import '/ikoue/react/vite-project/src/assets/fonts/poppins.css';

interface CardType{

    imageUrl: string
    name: string
    role: string
    description: string
}

const Card = ( props: CardType) => {

    const { name, role, description } = props;
    
    return(
            <div className='card'>
                <img src={image} alt={name} className='card-image' />
                <div className='card-content'>
                    <h2 className='card-name'>{name}</h2>
                    <h3 className='card-role'>{role}</h3>
                    <p className='card-description'>{description}</p>
                </div>
            </div>
    )
}

export default Card;