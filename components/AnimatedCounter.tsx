"use client";

import { useEffect, useState } from "react";

interface Counter {
  target: number;
  prefix?: string;
}

export default function AnimatedCounter({ target, prefix = "" }: Counter) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Durée de l'animation en ms
    const increment = target / (duration / 16); // approximativement 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}
      {count}
    </span>
  );
}
