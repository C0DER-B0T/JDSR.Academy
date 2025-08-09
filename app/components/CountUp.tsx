"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

function CountUp({
  end,
  duration = 2000,
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16); // ~60fps

      const updateCount = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      updateCount();
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, end, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default CountUp;
export { CountUp }; 