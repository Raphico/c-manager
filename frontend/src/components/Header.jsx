import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade'

export default function Header() 
{
  return (
    <Fade>
      <div className="header flex">
        <Link className="logo" to='/'>
          <h1>C Manager</h1>
        </Link>
        <Link className='accent' to='/add-contact'>
          <FaUserPlus size={30} />
        </Link>
      </div>
    </Fade>
  )
}