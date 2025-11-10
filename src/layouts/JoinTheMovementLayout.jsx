import { NavLink, Outlet } from "react-router-dom";

const JoinTheMovementLayout = () => {
  const tabClasses = ({ isActive }) =>
  `px-4 py-1 sm:px-6 sm:py-2 rounded-full text-[11px] sm:text-[13px] md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
    isActive
      ? "bg-white text-black shadow"
      : "text-gray-500 hover:text-teal-primary"
  }`;


  return (
    <div className="max-w-7xl mx-auto px-4 pb-10 py-[40px] lg:py-[80px] animate-slide-up">
      {/* Centered Heading */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-center mb-[40px]">
        Join <span className="text-teal-primary">the Movement</span>
      </h1>

      {/* Tab Navigation */}
      {/* <div className="bg-gray-100 rounded-full flex justify-center items-center gap-2 mb-10 p-1 w-fit mx-auto">
        <NavLink 
          to="/join-the-movement"
          end className={tabClasses}>
          Donate
        </NavLink>
        <NavLink to="challenge" className={tabClasses}>
          AWAKE Challenge
        </NavLink>
        <NavLink to="share-your-story" className={tabClasses}>
          Share your Story
        </NavLink>
      </div> */}

      <div className="bg-gray-100 rounded-full flex flex-wrap justify-center items-center gap-2 mb-8 p-2 w-full max-w-[90vw] sm:max-w-md mx-auto">
  <NavLink to="/join-the-movement" end className={tabClasses}>
    Donate
  </NavLink>
  <NavLink to="challenge" className={tabClasses}>
    AWAKE Challenge
  </NavLink>
  <NavLink to="share-your-story" className={tabClasses}>
    Share Your Story
  </NavLink>
</div>


      {/* Sub-content area */}
      <Outlet />
    </div>
  );
};

export default JoinTheMovementLayout;
