import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { CheckboxGroup } from "./components/CheckboxGroup"
import { RadioGroup } from './components/RadioGroup'
 
function App({setTrueorFalse}:any) {

  return (
    <div className="App">
      < Button size='big'
      onClick={() => {
        alert('Hello World')
      }}>True</Button>
      < Button size='medium' secondary 
      onClick={() => {
        setTrueorFalse(false)
      }}>False</Button>
      < Button size='medium'  
      onClick={() => {
      }}>True</Button>
      < Input />

      <ul className='form-list'>
        < CheckboxGroup />
        < RadioGroup />
                </ul>
    </div>
  )
}

export default App
