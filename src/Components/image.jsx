import image from '../assets/image.png'
import './image.css'
const Img = () => {
    return (
        <div className='card_image'>
            <img src={image} className='image' alt='car_image' />
        </div>
    )
}

export default Img;