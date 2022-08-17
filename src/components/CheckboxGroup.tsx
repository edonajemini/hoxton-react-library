import { useState } from 'react'
export function CheckboxGroup(){
        const  [checkbox, setCheckboxes] =  useState([
          {
            text: "Did u learn JS",
            id:"first-checkbox"
          },
          {
            text:"Did u learn CSS",
            id:"second-checkbox"
          },
          {
            text:"Did u learn REACT",
            id:"third-checkbox"
          },
          {
            text:"Did u learn TS",
            id:"fourth-checkbox"
          }
        ])
    return(
        <div>
            <li>
          {checkbox.map(item => (<div className='checkbox-list'>
            <input type="checkbox" name='letters' className='checkbox-letters' required
            onSelect={()=>{}}
            /> 
            <label>{item.text}</label>
            </div>
            ))}
            </li>
        </div>
    )
}