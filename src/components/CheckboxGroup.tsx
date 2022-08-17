import { useState } from 'react'
type Props = {
    children: string
    selected?: boolean
  }
export function CheckboxGroup({children, selected, ...props}:Props){
        const  [checkbox, setCheckboxes] =  useState([ "Did u learn JS", "Did u learn CSS", "Did u learn REACT", "Did u learn TS",])
        let style = { width: "20px", height:"20px", margin: "10px", fontSize:'10px', textDecoration: "none"};
        if  (selected) {
          style.width = "30px"
          style.height= "30px"
          style.textDecoration = "lineThrough"
      }
    return(
        <div>
            <li>
          {checkbox.map(item => (<div className='checkbox-list'>
            <input type="checkbox" name='letters' className='checkbox-letters' style={style} required
            onSelect={()=>{selected}}
            /> 

            <label>{item}</label>
            </div>
            ))}
            </li>
        </div>
    )
}