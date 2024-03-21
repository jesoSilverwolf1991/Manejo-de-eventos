import React, { useState } from 'react';

const FormularioConValidacion = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
    validarFormulario(event.target.value, email, contraseña);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    validarFormulario(nombre, event.target.value, contraseña);
  };

  const handleChangeContraseña = (event) => {
    setContraseña(event.target.value);
    validarFormulario(nombre, email, event.target.value);
  };

  const validarFormulario = (nombre, email, contraseña) => {
    if (nombre.length > 5 && email.includes('@') && contraseña.length > 5) {
      setBotonDeshabilitado(false);
    } else {
      setBotonDeshabilitado(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', contraseña);
   
    
    setNombre('');
    setEmail('');
    setContraseña('');
   
    setBotonDeshabilitado(true);
  };

  return (
    
    <form className='m-5 p-5 grid justify-center border-4 border-black w-[300px] font-bold bg-green-200 rounded-lg' onSubmit={handleSubmit}>
     <h1 className='font-bold grid justify-center p-2'>Ingrese tus datos personales</h1>
      <label>
        Nombre:
        <input className='border-2 p-0  border-black font-bold rounded-lg'type="text" value={nombre} onChange={handleChangeNombre} />
      </label>
      <br />
      <label>
        Correo Electrónico:
        <input  className='border-2  border-black font-bold rounded-lg' type="email" value={email} onChange={handleChangeEmail} />
      </label>
      <br />
      <label>
        Contraseña:
        <input  className='border-2  border-black font-bold rounded-lg' type="password" value={contraseña} onChange={handleChangeContraseña} />
      </label>
      <br />
      <button className='border-2 border-black cursor-pointer hover:bg-blue-200 bg-white rounded-lg' type="submit" disabled={botonDeshabilitado}>
        Enviar
      </button>
    </form>
  );
};

export default FormularioConValidacion;
