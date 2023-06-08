import { useNavigate } from 'react-router-dom';
import './Card.css'


export const Card = ({ title }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    const path = `/${title.toLowerCase()}`;
    navigate(path);
  }

  return (
  
    <div className='card'>
      <div className='card-background'>

          <h2 onClick={handleClick}> { title.toUpperCase() } </h2>
       
      </div>
      <p>Popular { title }</p>
    </div>
  )
}

