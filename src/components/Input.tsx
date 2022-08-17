export function Input(){
    return(
        <div>
            <li>
          <div className='email-list'>
          <label>email</label>
          <input type="email" name='email' className='input-email' placeholder='Your email goes here!' required />
            </div>
            </li>
        </div>
    )
}