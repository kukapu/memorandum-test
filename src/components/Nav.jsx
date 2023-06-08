import { useLocation, useNavigate } from 'react-router-dom';
import './Nav.css'
import { capitalizeFirstLetter } from '../helpers/methods';

export const Nav = () => {

  let { pathname } = useLocation();
  if(pathname === '/') pathname = '/titles';

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }


  return (
    
    <header className='header'>
      <div className='header-full-background'>
        <div className='header-main'>
          <h1 onClick={handleClick}>DEMO Streaming</h1>
          <div className='header-main-options'>
            <div className='header-main-btn-login'> Log in </div>
            <button className='header-main-btn'>Start your free trial</button>
          </div>
        </div>
      </div>

      <div className='header-second-background'>
        <div className='header-second'>
          <h2> Popular { capitalizeFirstLetter(pathname.slice(1)) } </h2>
        </div>
      </div>
    </header>
 
  )
}

