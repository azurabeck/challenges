import * as Style from './style'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const card = props.card

    return(
        <Style.Card>
            <Link key={card.key} to={card.route}>
                    <div>Name: {card.name}</div> 
                    <div>Level: {card.level}</div> 
                    <div>Duração: {card.duration}</div> 

            </Link>
        </Style.Card>
    )
  };
  
export default Card