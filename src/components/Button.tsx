
type Props = {
    children: string
    size?: 'big'|'small'
    clicked?: boolean
  }

export function Button({children,size,clicked, ...props}:Props){



    let style = {width: "90px", height:"30px",backgroundColor: 'pink', margin: "10px", padding:"5px", color: 'white', fontSize:'10px', textAlign: 'center', border:"none"}
    if  (size === 'big') {
        style.padding = "10px"  
        style.width = "90px"
        style.height= "30px"
        style.fontSize = "16px"
    }
    if  (size === 'small') {
        style.padding = "5px"  
        style.width = "60px"
        style.height= "20px"
        style.fontSize = "14px"
        style.backgroundColor = "transparent"
    }
    if  (clicked) {
       style.backgroundColor = "palevioletred"
    }
    return(
        <div>
            
            <button 
        className="btn" style= {style} {...props}> {children}</button>
        </div>
    )
} 