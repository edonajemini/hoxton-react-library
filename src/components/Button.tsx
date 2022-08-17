
type Props = {
    children: string
    size?: 'big'| 'medium'|'small'
    secondary?: boolean
  }
  

export function Button({children,size='medium',secondary, ...props}:Props){
    let style = {width: "90px", height:"30px",backgroundColor: 'pink', margin: "10px", padding:"5px", color: 'white', fontSize:'10px', textAlign: 'center'}
    if  (size === 'big') {
        style.padding = "10px"  
        style.width = "90px"
        style.height= "30px"
        style.fontSize = "16px"
    }
    if  (size === 'medium') {
        style.padding = "7px"
        style.width = "70px"
        style.height= "25px" 
        style.fontSize = "12px" 
    }
    if  (size === 'small') {
        style.padding = "5px"  
        style.width = "60px"
        style.height= "20px"
        style.fontSize = "10px"
    }
    if  (secondary) {
       style.backgroundColor = "rgba(207, 14, 46, 0.778)"
    }
    return(
        <div>
            <button 
        className="btn" style ={style}{...props}>{children}</button>
        </div>
    )
} 