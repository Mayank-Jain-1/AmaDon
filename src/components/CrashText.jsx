import React, { useState } from "react";

const CrashText = ({ text, className }) => {

  const [animate, setanimate] = useState(false);
  const animationName = "animate-crash"
  var style = `${ text === ' ' ? 'ml-4 sm:ml-5 ' : '' } duration-200 inline-block font-franklin font-bold text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl ${animate && animationName} hover:text-brandGreen`;

  return (
    <span
      className={style}
      onAnimationEnd={() => setanimate(false)}
      onMouseOver={() => setanimate(true)}
    >
      {text}
    </span>
  );
};

export default CrashText;
