import React, { useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios'
function LoginForm() {
	const [loginDetails,setLoginDetails]=useState({
		email:'',
		password:'',
	})
	let navigate=useNavigate()
	const handleChange=(e)=>{
		setLoginDetails((prev)=>({...prev,[e.target.name]:e.target.value}))
	}
	const loginUrl='http://localhost:3333/login'
	const handleLogin = (e) => {
		e.preventDefault();
		if(loginDetails.email && loginDetails.password){
			console.log(loginDetails)
			axios.post(loginUrl,loginDetails)
			.then((response)=>{
				console.log(response)
				navigate('/')
			})
			.catch((err)=>{
				console.log(err)
			})
		}
		else{
			console.log("Invalid Details")
		}
		
	};
	
	return (
		<div className="d-flex justify-content-center align-items-center vh-100 bg-light css-bg">
			<div className="card shadow rounded-4 p-4 glass-effect" style={{ width: "100%", maxWidth: "400px" }}>
				<h3 className="text-center mb-4 fw-bold">Welcome Back</h3>

				<form onSubmit={handleLogin} method='post' action='http://localhost:3333/'>
					<div className="mb-3">
						<label className="form-label">Email Address</label>
						<div className="input-group">
							<span className="input-group-text bg-white">
								<i className="fas fa-envelope sp-font"></i>
							</span>
							<input
								type="email"
								name='email'
								className="form-control"
								placeholder="Enter email"
								autoComplete="off"
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					<div className="mb-2">
						<label className="form-label">Password</label>
						<div className="input-group">
							<span className="input-group-text bg-white">
								<i className="fas fa-lock sp-font"></i>
							</span>
							<input
								type="password"
								className="form-control"
								placeholder="Enter password"
								name='password'
								autoComplete="off"
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					<div className="d-flex justify-content-between align-items-center mb-4">

						<Link to="/forgot-password" className="text-decoration-none small text-primary sp-font">
							Forgot Password?
						</Link>
					</div>

					<button type="submit" className="btn btn-primary w-100 rounded-pill fw-semibold">
						Login
					</button>
				</form>

				<div className="text-center mt-3">
					<small>
						Don’t have an account? 
						<Link to="/register" className="text-decoration-none fw-bold">
							Register
						</Link>
					</small>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
