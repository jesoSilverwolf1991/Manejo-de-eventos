import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    alert("Nombre de usuario: " + username + "\nContraseña: " + password);
  };

  return (
    <form className='m-5 p-5 grid justify-center border-4 border-black w-[300px] font-bold bg-red-200 rounded-lg' onSubmit={handleSubmit}>
     <h1 className='font-bold grid justify-center p-2'>Ingresa Sección</h1>
      <input className='border-2 p-0  border-black font-bold rounded-lg m-5'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nombre de usuario"
        required
      />
      <input className='border-2 p-0  border-black font-bold rounded-lg m-5'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
      <input className='border-2 border-black cursor-pointer hover:bg-blue-200 bg-white rounded-lg'  type="submit" value="Iniciar sesión" />
    </form>
  );
}

export default LoginForm;
