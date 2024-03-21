import React, { useState } from 'react';

function DropdownComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='grid justify-center border-4 border-black m-5 p-5 w-[300px] bg-blue-200'>
      <select className='border-4 border-black  w-[250px]'value={selectedOption} onChange={handleSelectChange}>
      
        <option  value="">Selecciona una ciudad para viajar</option>
        <option value="opcion1">Suiza</option>
        <option value="opcion2">España</option>
        <option value="opcion3">Francia</option>
        <option value="opcion4">Italia</option>
      </select>
      <p>Opción seleccionada: {selectedOption}</p>
    
    </div>
  );
}

export default DropdownComponent;
