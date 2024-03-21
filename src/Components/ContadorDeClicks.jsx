import React from 'react';

class ContadorDeClicks extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      contador: 0
    };
  }


  handleClick = () => {
   
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div className='border-4 rounded-lg w-50 grid-cols-2 m-5 p-4 grid justify-items-center border-black bg-red-300'>
        
        <button className='border border-black w-48 hover:bg-white font-bold rounded-lg' onClick={this.handleClick}>Haz clic aquí</button>
        
        <p className='font-bold'>Has hecho clic {this.state.contador} veces</p>
      </div>
    );
  }
}

export default ContadorDeClicks;
