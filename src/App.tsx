import './App.css'
import { Buttons } from './components/Buttons'
import { Input } from './components/Input'
import { CheckboxGroup } from "./components/CheckboxGroup"
import { RadioGroup } from './components/RadioGroup'

function App() {

  return (
    <div className="App">
      < Buttons />
      < Input />

      <ul className='form-list'>
        < CheckboxGroup />
        < RadioGroup />
                </ul>
    </div>
  )
}

export default App
