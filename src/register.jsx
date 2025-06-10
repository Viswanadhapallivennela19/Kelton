import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
function RegistrationForm() {
  let navigate=useNavigate();
  const [regData, setRegData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
     
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registered Data:', regData);
    axios.post('http://localhost:3000/register',regData)
    .then((response)=>{
      console.log(response)
      alert(response.message)
      navigate('/login')
    })
    .catch((err)=>{
      console.log("Error",err.message)
    })
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
        <h3 className="text-center mb-4 fw-bold">Create Account</h3>

        <form onSubmit={handleRegister} action='/login'>
         
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                name="name"
                value={regData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-envelope"></i></span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={regData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
              <input
                type="password"
                className="form-control"
                placeholder="Create password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
          </div>
 
          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
                required
              />
            </div>
          </div>
 
          <button type="submit" className="btn btn-success w-100 rounded-pill fw-semibold">
              Register
          </button>
        </form>

        <div className="text-center mt-3">
          <small>Already have an account? <Link to="/login">Login</Link></small>
        </div>
      </div>
    </div>
  );
}


export default RegistrationForm;
