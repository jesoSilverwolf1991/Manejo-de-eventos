import React from 'react';

class BotonClic extends React.Component {
  handleClick = () => {
    alert("¡Fui clickeado!");
  }

  render() {
    return (
      <div className='border-4 bg-black grid justify-center'>
        <button className='text-white ' onClick={this.handleClick}>Haz clic aquí</button>
      </div>
    );
  }
}

export default BotonClic;
