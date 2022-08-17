import { useState } from 'react'
export function CheckboxGroup(){
        const  [checkbox, setCheckboxes] =  useState([ "Did u learn JS", "Did u learn CSS", "Did u learn REACT", "Did u learn TS",
           
        ])
    return(
        <div>
            <li>
          {checkbox.map(item => (<div className='checkbox-list'>
            <input type="checkbox" name='letters' className='checkbox-letters' required
            onSelect={()=>{}}
            /> 
            <label>{item}</label>
            </div>
            ))}
            </li>
        </div>
    )
}