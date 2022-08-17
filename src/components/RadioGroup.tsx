import { useState } from 'react'
export function RadioGroup(){
    const  [radio, setRadios] =  useState(["Is your name Ed?","Is your name Nico?","Is your name Edona?",])
    return(
        <div>
            <li>
              {radio.map(item => (<div className='radio-list'>
                <input 
                type="radio"
                name="text"
                required />
                <label htmlFor="text-1"> {item}</label>
                </div>
                ))}
                </li>
        </div>
    )
}