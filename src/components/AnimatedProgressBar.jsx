import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";

export const AnimatedProgressBar = ({ current, goal }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3,
  });

  const [width, setWidth] = useState("0%");

  const percentage = (current / goal) * 100;

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setWidth(`${percentage}%`);
      }, 100); 
    } else {
      setWidth("0%"); 
    }
  }, [inView, percentage]);

  return (
    <div
      ref={ref}
      className="relative bg-white rounded-full shadow-inner h-2 sm:h-3 md:h-4 w-full overflow-hidden transition-all duration-700"
    >
      <div
        className="bg-teal-primary h-full rounded-full transition-all duration-1000 ease-in-out"
        style={{ width }}
      ></div>

      {/* Floating Label */}
      <span
        className="absolute top-full mt-2 text-[11px] sm:text-xs font-semibold text-gray-800 transition-all duration-500"
        style={{
          left: width,
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
        }}
      >
        ₦{current.toLocaleString()}
      </span>
    </div>
  );
};
