import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { loginUser } from '../../actions/User'
import './Login.css'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()
  const {message,error} = useSelector(state => state.user)

  const handleLogin = (e)=>{
    e.preventDefault()
    console.log(email,password)
    dispatch(loginUser(email,password))
  } 

  useEffect(()=>{
    if(error){
      alert(error);
      dispatch({type:"clearErrors"})
    } 
    if(message){
      alert(message);
      dispatch({type:"clearMessage"})
    }
  },[error,dispatch,message])

  return (
    <div className='login-container'>
        <div className='login-box'>
            <div className='login-header'>
                Login
            </div>
            <div className='login-form'>
                <label htmlFor='email'>Email:</label>
                <input required value={email} onChange={(e)=>setEmail(e.target.value)} type='email' name='email' id='email' />
            </div>
            <div className='login-form'>
                <label htmlFor='password'>Password:</label>
                <input required value={password} onChange={(e)=>setPassword(e.target.value)} type='password' name='password' id='password' />
            </div>
            <div className='login-btn-grp'>
                <button onClick={handleLogin}>Submit</button>
                <button><Link to="/register">Register</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Login