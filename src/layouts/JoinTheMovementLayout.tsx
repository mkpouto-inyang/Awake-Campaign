import { NavLink, Outlet } from 'react-router-dom';
import clock from '../assets/icons/clock.svg'

const JoinTheMovementLayout = () => {
  const tabClasses = ({ isActive }) =>
    `px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-white text-black shadow'
        : 'text-gray-500 hover:text-teal-primary'
    }`;

  return (
    <div className="max-w-7xl mx-auto px-4 pb-10">
      {/* Callout Badge */}
      <div className="mt-[50px] text-[11px] lgxl:text-base w-fit flex gap-1 mx-auto border border-orange px-5 py-1 rounded-full justify-center items-center mb-[40px]">
        <img src={clock} alt="clock icon" className="w-3 h-3 lgxl:w-4 lgxl:h-4" />
        <p className="text-orange">The time to act is now</p>
      </div>

      {/* Centered Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-center mb-[40px]">
        Join <span className="text-teal-primary">the Movement</span>
      </h1>

      {/* Tab Navigation */}
      <div className="bg-gray-100 rounded-full flex justify-center gap-2 mb-10 p-1 w-fit mx-auto">
        <NavLink to="/join-the-movement" end className={tabClasses}>
          Donate
        </NavLink>
        <NavLink to="challenge" className={tabClasses}>
          AWAKE Challenge
        </NavLink>
        <NavLink to="share-your-story" className={tabClasses}>
          Share your Story
        </NavLink>
      </div>

      {/* Sub-content area */}
      <Outlet />
    </div>
  );
};

export default JoinTheMovementLayout;
