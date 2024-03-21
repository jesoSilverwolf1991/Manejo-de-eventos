import React, { useState } from 'react';

const KeyPressComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      alert('Hola mundo');
     
    }
  };

  return (
    <div className='grid justify-center'>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Presiona Enter"
      />
    </div>
  );
};

export default KeyPressComponent;
