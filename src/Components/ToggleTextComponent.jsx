import React, { useState } from 'react';

function ToggleTextComponent() {
  const [text, setText] = useState('Hello');

  const toggleText = () => {
    setText(text === 'Hello' ? 'Bye' : 'Hello');
  };

  return (
    <div className='border-4 border-black grid justify-center w-[300px] p-5 m-5 font-bold'>
      <p className='p-5'>{text}</p>
      <button className= 'border-4 border-black  w-[150px] hover:bg-green-300 ' onClick={toggleText}>Change text</button>
    </div>
  );
}

export default ToggleTextComponent;
