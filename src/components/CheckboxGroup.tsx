import { useState } from 'react'
type Props = {
    children: string
    selected?: boolean
  }


export function CheckboxGroup({children, selected, ...props}:Props){

        const  [checkbox, setCheckboxes] =  useState([ "Did u learn JS", "Did u learn CSS", "Did u learn REACT", "Did u learn TS",])
        let style = { width: "15px", height:"15px", margin: "10px", fontSize:'10px', textDecoration: "none"};
        if  (selected) {
          style.width = "15px"
          style.height= "15px"
          style.textDecoration = "lineThrough"
      }
    return(
        <div>
            <li>
          {checkbox.map(item => (<div className='checkbox-list'>
            <input type="checkbox" name='letters' className='checkbox-letters' style={style} required
            onSelect={()=>{item = item.toLowerCase()} }/>
            <label>{item.toUpperCase()}</label>
            </div>
            ))}
            </li>
        </div>
    )
}