import React, { useState } from 'react';

const MouseOverComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-70 h-24 flex items-center justify-center cursor-pointer transition duration-300 ${isHovered ? 'bg-black font-bold m-5 border-4 border-black text-white text-[40px] underline' : 'bg-white font-bold m-5 border-4 border-black text-[40px] underline' }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Pasa el mouse sobre mí
    </div>
  );
};

export default MouseOverComponent;
