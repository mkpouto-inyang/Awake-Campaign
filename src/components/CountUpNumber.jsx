// components/CountUpNumber.jsx
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CountUpNumber = ({
  target,
  duration = 2000,
  className = "",
  easing = "easeOutCubic",
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 allow retriggering every time it scrolls into view
    threshold: 0.3,
  });

  const easingFunctions = {
    linear: (t) => t,
    easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
    easeOutQuad: (t) => t * (2 - t),
  };

  useEffect(() => {
    const end = parseInt(target);
    if (isNaN(end)) return;

    if (inView) {
      if (end === 0) {
        setCount(0);
        return;
      }

      let start = 0;
      const startTime = performance.now();
      const ease = easingFunctions[easing] || easingFunctions.linear;

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = ease(progress);
        const value = Math.floor(easedProgress * end);
        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, target, duration, easing]); // 👈 inView is a dependency so it re-triggers

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {target.toString().includes("+") && "+"}
    </span>
  );
};

export default CountUpNumber;
