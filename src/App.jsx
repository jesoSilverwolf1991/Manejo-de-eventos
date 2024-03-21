
import './index.css'
import BotonClic from './Components/BotonClic.jsx'
import ContadorDeClicks from './Components/ContadorDeClicks.jsx'
import TextInputComponent from './Components/TextInputComponent.jsx'
import ToggleTextComponent from './Components/ToggleTextComponent.jsx'
import DropdownComponent from './Components/DropdownComponent.jsx'
import FormularioConValidacion  from './Components/FormularioConValidacion .jsx'
import MouseOverComponent from './Components/MouseOverComponent.jsx'
import KeyPressComponent from './Components/KeyPressComponent.jsx'
import LoginForm from './Components/LoginForm.jsx'

function App() {
 
  return (
    <>
   <BotonClic/>
   <ContadorDeClicks/>
   <TextInputComponent />
   <ToggleTextComponent/>
   <DropdownComponent/>
   <FormularioConValidacion />
   <MouseOverComponent/>
  <KeyPressComponent />
  <LoginForm/>
    </>
  )
}

export default App
