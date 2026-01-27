"use client";

import { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";

export default function AnimatedIcon({
  src,
  size = 36,
}) {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef();

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, [src]);

  if (!animationData) return null;

  return (
    <div
      style={{ width: size, height: size }}
      className="cursor-pointer"
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
      onTouchStart={() => lottieRef.current?.play()}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
      />
    </div>
  );
}
