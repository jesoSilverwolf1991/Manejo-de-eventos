import React, { useState } from 'react';

function TextInputComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='grid justify-center border-4 border-black w-[300px] h-[100px ] m-5 p-4'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe algo..."
      />
      <p>El valor del input es: {inputValue}</p>
    </div>
  );
}

export default TextInputComponent;
