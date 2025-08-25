import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';


function Register() {

const [registrationInfo,setRegistrationInfo] = useState({
    name:'',
    email:'',
    phone:'',
    password:''
})

const handleRegistration =(e)=>{
   e.preventDefault();
   let Value = e.target.value;
   let feildName = e.target.name;

   setRegistrationInfo(prev => ({ ...prev,
      [feildName]:Value
   }))
}

function handleSubmit() {
  fetch('http://localhost:3000/user/registration',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(registrationInfo)
  })
}



  return (
    <>
    <div>
      <div className="register-page  d-flex justify-content-center align-items-center vh-100">
      <form className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Please Register Here</h3>

        <i className="fas fa-user"></i> Profile

        <div className="form-floating mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="user-name" className="form-control" placeholder="exapmle" name='name' onChange={handleRegistration}/>
        </div>

        <div className="form-floating mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" placeholder="example@123.com" name='email' onChange={handleRegistration}/>
        </div>

        <div className="form-floating mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" id="phone" className="form-control" name='phone' onChange={handleRegistration}/>
        </div>

        <div className="form-floating mb-3">
          <label htmlFor="password" className="form-label">Create Password</label>
          <input type="password" id="password" className="form-control" placeholder="password"  name='password' onChange={handleRegistration}/>
         
        </div>


        <p>Existing User ? <Link to="/">Login here</Link></p>

        <button type="submit" className="btn btn-success w-100" onClick={handleSubmit}>SignUp</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Register
