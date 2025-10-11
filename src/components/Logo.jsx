import logo from '../assets/static-images/logo.svg'
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return ( 
        <NavLink to="/">
            <img src={logo} alt="campaign logo" />
        </NavLink>
     );
}
 
export default Logo