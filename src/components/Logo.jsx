// import logo from '../assets/icons/Awake-logo.svg'
// import { NavLink } from 'react-router-dom';

// const Logo = () => {
//     return ( 
//         <NavLink to="/">
//             <img src={logo} alt="campaign logo"  className="w-24 h-auto sm:w-28" />
//         </NavLink>
//      );
// }
 
// export default Logo

import logo from '../assets/icons/Awake-logo.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center">
      <img
        src={logo}
        alt="AWAKE Campaign Logo"
        className="w-8 h-8 sm:w-14 sm:h-10 scale-[1.8] origin-left"
      />
    </NavLink>
  );
};

export default Logo;
