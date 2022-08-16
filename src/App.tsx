
import { useState } from 'react'
import './App.css'

function App() {
const  [checkbox, setCheckboxes] =  useState([
  {
    text: "Edona",
    id:"first-checkbox"
  },
  {
    text:"Nicolas",
    id:"second-checkbox"
  },
  {
    text:"Ed",
    id:"third-checkbox"
  }
])

const  [radio, setRadios] =  useState([
  {
    text: "A",
    id:"first-radio"
  },
  {
    text:"B",
    id:"second-radio"
  },
  {
    text:"C",
    id:"third-radio"
  }
])
  return (
    <div className="App">
      <button 
        className="btn-class"  onSubmit={()=>{}}>Im The Button</button>
      <ul className='form-list'>
        <li>
          {checkbox.map(item => (<div className='checkbox-list'>
            <input type="checkbox" name='letters' className='checkbox-letters' required/> 
            <label>{item.text}</label>
            </div>
            ))}
            </li>
            <li>
              {radio.map(item => (<div className='radio-list'>
                <input 
                id="first-radio"
                type="radio"
                name="text"
                required
                value="1" />
                <label htmlFor="text-1"> {item.text}</label>
                </div>
                ))}
                </li>
                </ul>
    </div>
  )
}

export default App
