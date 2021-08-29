import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/UserSlice'
import './Login.css'
export const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //  const dispatch = useDispatch();
    const dispatch = useDispatch()

   const handleSubmit = (e) =>  {
e.preventDefault();

 dispatch(
     login({
         name:name,
         email:email,
         password:password,
         loggedin:true
     })
 )

   }


    return (
      <div className='login'>
        <form action='' className='login__form' onSubmit={handleSubmit} >
            <h1>Login here</h1>
          <input type='name'
           placeholder='name'
            value={name} 
            required
            onChange={(e) =>{setName(e.target.value)}} 
            />
          <input type='email' 
          placeholder='email'  
          required
          value={email} onChange={(e) => {setEmail(e.target.value)}} 
          />
          <input type='password' 
          placeholder='password' 
          required
          value={password} onChange={(e) =>{setPassword(e.target.value)}} 
          />

          <button className='submit__btn' type='submit'>Submit</button>
        </form>
      </div>
    )
}
