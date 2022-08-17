import { useState } from 'react'
export function CheckboxGroup(){
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
    return(
        <div>
            <li>
          {checkbox.map(item => (<div className='checkbox-list'>
            <input type="checkbox" name='letters' className='checkbox-letters' required/> 
            <label>{item.text}</label>
            </div>
            ))}
            </li>
        </div>
    )
}