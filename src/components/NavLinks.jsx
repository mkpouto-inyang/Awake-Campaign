import { NavLink } from "react-router-dom";

const NavLinks = () => {

    const links = [
        {path:"/", label:"Home"},
        {path:"/campaign-events", label:"Campaign Events"},
        {path:"join-the-movement", label:"Join the Movement"},
        {path:"/about-us", label:"About Us"},
        {path:"/contact", label:"Contact"}
    ]
    
  return (
      <nav className=" hidden lg:flex lg:gap-12 md:text-sm xl:text-base">
         {links.map((nav,index)=>
            <NavLink 
                key={index} 
                to={nav.path}
                className={
                     
                    ({isActive})=>{
                    isActive? "text-[#015660] font-medium underline":"text-black hover:text-[#015660]"
                }}
                >
                {nav.label}
                </NavLink>
        )}
      </nav>
  );
};

export default NavLinks;
