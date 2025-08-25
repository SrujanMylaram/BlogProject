import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [userInfo,setUserInfo] = useState({
    email:'',
    password:''
  });

  const handleLogin = (e) =>{
    e.preventDefault();
    let Value = e.target.value;
    let feildName = e.target.name;
    setUserInfo(prev => ({...prev,
      [feildName]:Value
    }));
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3000/user/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        },
        body:JSON.stringify(userInfo)
    })
  
  }
 

  return (
    <>
    <div className="login-page  d-flex justify-content-center align-items-center vh-100">
      <form className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Please Login Here</h3>

        <div className="form-floating mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" placeholder="example@123.com" name='email' onChange={handleLogin} value={userInfo.email}/>
        </div>

        <div className="form-floating mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" placeholder="password" name='password' onChange={handleLogin} value={userInfo.password}/> 
        </div>
        
        <p>New User? <Link to="/register">Register here</Link></p>

        <button type="submit" className="btn btn-success w-100" onClick={handleSubmit}>Login</button>
      </form>
    </div>
    </>
    
  )
}

export default Login
