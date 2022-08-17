export function Input(){
    return(
        <div>
            <li>
          <div className='email-list'>
          <input type="email" name='email' className='input-email' placeholder='Your email goes here!' required />
            <label>email</label>
            </div>
            </li>
        </div>
    )
}