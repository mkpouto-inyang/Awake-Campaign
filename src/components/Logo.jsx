import logo from '../assets/icons/Awake-logo.svg'
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return ( 
        <NavLink to="/">
            <img src={logo} alt="campaign logo" className='w-7 h-7' />
        </NavLink>
     );
}
 
export default Logo