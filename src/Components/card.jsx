import Image from "./image.jsx";
import Title from "./title.jsx";
import Description from "./description.jsx";
import Button from "./button.jsx";
import './card.css';


const Card = () => {
    return (
        <div className='card'>
            <Image/>
            <div className='card_detail'>
                <Title/>
                <Description/>
                <Button/>
            </div>
        </div>

    )
}
export default Card;