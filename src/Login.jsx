import React, { useState } from 'react'


function Login() {
  const [email, SetEmail] = useState()
  const [password, SetPassword] = useState()
  console.log('email', email)
  console.log('password', password)
  function submit(e){
        e.preventDefault()
        console.log("form submitted")
  }
  return (
    <>
      <p>Registration Form</p>
      <div>
        <form  className='colorchangee'>

          <input type="text" class="email" onChange={(e)=>SetEmail(e.target.value)} />
          <input type="text" class="password " onChange={(e)=>SetPassword(e.target.value)} />
          <button onClick={submit}>submit</button>
          
           
        </form>
      </div>

      <style>{`

      .colorchange{
        
        background-color: #f1f1f1;
        margin: 0 auto;
        padding: 20px;
        width: 50%;
        border: 1px solid black;
        border-radius: 10px;

      
      }
      .email{
        margin: 10px;
        padding: 10px;
        width: 50%;
        border-radius: 10px;
        
      }
      .password{
        margin: 10px;
        padding: 10px;
        width: 50%;
        border-radius: 10px;
      }
      `}


      </style>
    </>
  )
}

export default Login
