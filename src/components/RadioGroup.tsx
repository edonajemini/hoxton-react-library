import { useState } from 'react'
export function RadioGroup(){
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