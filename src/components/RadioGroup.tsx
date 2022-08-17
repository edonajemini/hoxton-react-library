import { useState } from 'react'
export function RadioGroup(){
    const  [radio, setRadios] =  useState([
        {
          text: "Is your name Ed?",
          id:"first-radio"
        },
        {
          text:"Is your name Nico?",
          id:"second-radio"
        },
        {
          text:"Is your name Edona?",
          id:"third-radio"
        }
      ])
    return(
        <div>
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
        </div>
    )
}