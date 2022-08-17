import './App.css'
import { useState } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { CheckboxGroup } from "./components/CheckboxGroup"
import { RadioGroup } from './components/RadioGroup'
 
function App({setTrueorFalse}:any) {
  const [buttonText, setButtonText] = useState('Click');

  function handleClick() {
    setButtonText('Hello');
  }
  return (
    <div className="App">
      <div className='buttons'>
      < Button size='big'
      onClick={() => {
        alert('Hello World')
      }}>True</Button>
      < Button size='small' 
       onClick={handleClick}>{buttonText}</Button>
      </div>
      < Input />
      <ul className='form-list'>
        < CheckboxGroup children='' />
        < RadioGroup />
                </ul>
    </div>
  )
}

export default App
