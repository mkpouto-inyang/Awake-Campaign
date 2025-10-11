import clock from '../assets/icons/clock.svg';

const JoinTheMovement = () => {
  return ( 
    <div className="max-w-7xl mx-auto px-4">
      
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
     <div>

     </div>
    </div>
  );
};
 
export default JoinTheMovement;
